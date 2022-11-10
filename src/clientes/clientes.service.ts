import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cliente, Prisma } from '@prisma/client';
import { ManagementClient } from 'auth0';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async cliente(
    clienteWhereUniqueInput: Prisma.ClienteWhereUniqueInput
  ): Promise<Cliente | null> {
    const cliente = await this.prisma.cliente.findUnique({
      where: clienteWhereUniqueInput,
    });

    cliente['fecha_nacimiento_string'] =
      cliente.fecha_nacimiento.toLocaleDateString('es-MX');

    return cliente;
  }

  async clientes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClienteWhereUniqueInput;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput;
  }): Promise<Cliente[]> {
    const { skip, take, cursor, where, orderBy } = params;

    const clientes = await this.prisma.cliente.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        Dispositivo: true,
      },
    });

    const result = clientes.map((cliente) => {
      cliente['fecha_nacimiento_string'] =
        cliente.fecha_nacimiento.toLocaleDateString('es-MX');
      return cliente;
    });

    return result;
  }

  async createCliente(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    const cliente = await this.prisma.cliente.findFirst({
      where: { email: data.email },
    });

    if (cliente) {
      throw new HttpException('Already exists', HttpStatus.CONFLICT);
    } else {
      data.fecha_nacimiento = new Date(data.fecha_nacimiento);
      return this.prisma.cliente.create({
        data,
      });
    }
  }

  updateCliente(params: {
    where: Prisma.ClienteWhereUniqueInput;
    data: Prisma.ClienteUpdateInput;
  }): Promise<Cliente> {
    const { where, data } = params;
    if (typeof data.fecha_nacimiento === 'string') {
      data.fecha_nacimiento = new Date(data.fecha_nacimiento);

      return this.prisma.cliente.update({
        data,
        where,
      });
    }

    throw new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  async removeCliente(where: Prisma.ClienteWhereUniqueInput): Promise<Cliente> {
    return await this.prisma.cliente.update({
      data: { activo: false },
      where,
    });
  }

  async activateTecnico(
    where: Prisma.ClienteWhereUniqueInput
  ): Promise<Cliente> {
    return await this.prisma.cliente.update({
      data: { activo: true },
      where,
    });
  }
}
