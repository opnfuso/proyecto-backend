import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Dispositivo, Prisma } from '@prisma/client';

@Injectable()
export class DispositivosService {
  constructor(private prisma: PrismaService) {}

  async dispositivo(
    dispositivoWhereUniqueInput: Prisma.DispositivoWhereUniqueInput
  ): Promise<Dispositivo | null> {
    const dispositivo = await this.prisma.dispositivo.findUnique({
      where: dispositivoWhereUniqueInput,
      include: {
        cliente: true,
      },
    });

    dispositivo['fecha_recibido_string'] =
      dispositivo.fecha_recibido.toLocaleDateString('es-MX');

    return dispositivo;
  }

  async dispositivos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DispositivoWhereUniqueInput;
    where?: Prisma.DispositivoWhereInput;
    orderBy?: Prisma.DispositivoOrderByWithRelationInput;
  }): Promise<Dispositivo[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const dispositivos = await this.prisma.dispositivo.findMany({
      skip,
      take,
      cursor,
      where,
      include: {
        cliente: true,
      },
      orderBy,
    });

    const result = dispositivos.map((dispositivo) => {
      dispositivo['fecha_recibido_string'] =
        dispositivo.fecha_recibido.toLocaleDateString('es-MX');
      return dispositivo;
    });

    return result;
  }

  async createDispositivo(
    data: Prisma.DispositivoCreateInput
  ): Promise<Dispositivo> {
    data.fecha_recibido = new Date(data.fecha_recibido);
    const dispositivo = await this.prisma.dispositivo.create({
      data,
    });
    await this.prisma.bitacora.create({
      data: {
        imei_dispositivo: dispositivo.imei,
      },
    });

    return dispositivo;
  }

  updateDispositivo(params: {
    where: Prisma.DispositivoWhereUniqueInput;
    data: Prisma.DispositivoUpdateInput;
  }): Promise<Dispositivo> {
    const { where, data } = params;
    if (typeof data.fecha_recibido === 'string') {
      data.fecha_recibido = new Date(data.fecha_recibido);

      return this.prisma.dispositivo.update({
        data,
        where,
      });
    }

    throw new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  removeDispositivo(
    where: Prisma.DispositivoWhereUniqueInput
  ): Promise<Dispositivo> {
    return this.prisma.dispositivo.delete({
      where,
    });
  }
}
