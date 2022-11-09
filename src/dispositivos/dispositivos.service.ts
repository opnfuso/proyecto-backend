import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Dispositivo, Prisma } from '@prisma/client';

@Injectable()
export class DispositivosService {
  constructor(private prisma: PrismaService) {}

  dispositivo(
    dispositivoWhereUniqueInput: Prisma.DispositivoWhereUniqueInput
  ): Promise<Dispositivo | null> {
    return this.prisma.dispositivo.findUnique({
      where: dispositivoWhereUniqueInput,
      include: {
        cliente: true,
      },
    });
  }

  dispositivos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DispositivoWhereUniqueInput;
    where?: Prisma.DispositivoWhereInput;
    orderBy?: Prisma.DispositivoOrderByWithRelationInput;
  }): Promise<Dispositivo[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dispositivo.findMany({
      skip,
      take,
      cursor,
      where,
      include: {
        cliente: true,
      },
      orderBy,
    });
  }

  async createDispositivo(
    data: Prisma.DispositivoCreateInput
  ): Promise<Dispositivo> {
    const dispositivo = await this.prisma.dispositivo.create({
      data,
    });
    await this.prisma.bitacora.create({
      data: {
        imei_dispositivo: dispositivo.imei,
        fecha_recibido: new Date(),
      },
    });

    return dispositivo;
  }

  updateDispositivo(params: {
    where: Prisma.DispositivoWhereUniqueInput;
    data: Prisma.DispositivoUpdateInput;
  }): Promise<Dispositivo> {
    const { where, data } = params;

    return this.prisma.dispositivo.update({
      data,
      where,
    });
  }

  removeDispositivo(
    where: Prisma.DispositivoWhereUniqueInput
  ): Promise<Dispositivo> {
    return this.prisma.dispositivo.delete({
      where,
    });
  }
}
