import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Dispositivo, Prisma } from '@prisma/client';

@Injectable()
export class DispositivosService {
  constructor(private prisma: PrismaService) { }

  dispositivo(
    dispositivoWhereUniqueInput: Prisma.DispositivoWhereUniqueInput
  ): Promise<Dispositivo | null> {
    return this.prisma.dispositivo.findUnique({
      where: dispositivoWhereUniqueInput,
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

  createDispositivo(data: Prisma.DispositivoCreateInput): Promise<Dispositivo> {
    data.fecha_recibido = new Date(data.fecha_recibido);
    return this.prisma.dispositivo.create({
      data,
    });
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
