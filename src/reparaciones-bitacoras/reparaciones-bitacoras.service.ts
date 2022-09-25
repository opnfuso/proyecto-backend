import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ReparacionesBitacoras, Prisma } from '@prisma/client';

@Injectable()
export class ReparacionesBitacorasService {
  constructor(private prisma: PrismaService) {}

  reparacionesBitacoras(
    reparacionesBitacorasWhereUniqueInput: Prisma.ReparacionesBitacorasWhereUniqueInput
  ): Promise<ReparacionesBitacoras | null> {
    return this.prisma.reparacionesBitacoras.findUnique({
      where: reparacionesBitacorasWhereUniqueInput,
    });
  }

  reparacionesBitacorass(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ReparacionesBitacorasWhereUniqueInput;
    where?: Prisma.ReparacionesBitacorasWhereInput;
    orderBy?: Prisma.ReparacionesBitacorasOrderByWithRelationInput;
  }): Promise<ReparacionesBitacoras[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.reparacionesBitacoras.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createReparacionesBitacoras(
    data: Prisma.ReparacionesBitacorasCreateInput
  ): Promise<ReparacionesBitacoras> {
    return this.prisma.reparacionesBitacoras.create({
      data,
    });
  }

  updateReparacionesBitacoras(params: {
    where: Prisma.ReparacionesBitacorasWhereUniqueInput;
    data: Prisma.ReparacionesBitacorasUpdateInput;
  }): Promise<ReparacionesBitacoras> {
    const { where, data } = params;
    return this.prisma.reparacionesBitacoras.update({
      data,
      where,
    });
  }

  removeReparacionesBitacoras(
    where: Prisma.ReparacionesBitacorasWhereUniqueInput
  ): Promise<ReparacionesBitacoras> {
    return this.prisma.reparacionesBitacoras.delete({
      where,
    });
  }
}
