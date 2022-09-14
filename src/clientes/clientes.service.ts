import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cliente, Prisma } from '@prisma/client';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  cliente(
    clienteWhereUniqueInput: Prisma.ClienteWhereUniqueInput
  ): Promise<Cliente | null> {
    return this.prisma.cliente.findUnique({
      where: clienteWhereUniqueInput,
    });
  }

  async clientes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClienteWhereUniqueInput;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput;
  }): Promise<Cliente[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.cliente.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createCliente(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    data.fecha_nacimiento = new Date(data.fecha_nacimiento);
    return this.prisma.cliente.create({
      data,
    });
  }

  updateCliente(params: {
    where: Prisma.ClienteWhereUniqueInput;
    data: Prisma.ClienteUpdateInput;
  }): Promise<Cliente> {
    const { where, data } = params;
    return this.prisma.cliente.update({
      data,
      where,
    });
  }

  removeCliente(where: Prisma.ClienteWhereUniqueInput): Promise<Cliente> {
    return this.prisma.cliente.delete({
      where,
    });
  }
}
