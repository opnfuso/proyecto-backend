import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ManualReparaciones, Prisma } from '@prisma/client';

@Injectable()
export class ManualReparacionesService {
  constructor(private prisma: PrismaService) {}

  manualReparaciones(
    manualReparacionesWhereUniqueInput: Prisma.ManualReparacionesWhereUniqueInput
  ): Promise<ManualReparaciones | null> {
    return this.prisma.manualReparaciones.findUnique({
      where: manualReparacionesWhereUniqueInput,
    });
  }

  manualReparacioness(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ManualReparacionesWhereUniqueInput;
    where?: Prisma.ManualReparacionesWhereInput;
    orderBy?: Prisma.ManualReparacionesOrderByWithRelationInput;
  }): Promise<ManualReparaciones[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.manualReparaciones.findMany({
      skip,
      take,
      cursor,
      where,
      include: {
        ReparacionesBitacoras: true,
      },
      orderBy,
    });
  }

  createManualReparaciones(
    data: Prisma.ManualReparacionesCreateInput
  ): Promise<ManualReparaciones> {
    return this.prisma.manualReparaciones.create({
      data,
    });
  }

  updateManualReparaciones(params: {
    where: Prisma.ManualReparacionesWhereUniqueInput;
    data: Prisma.ManualReparacionesUpdateInput;
  }): Promise<ManualReparaciones> {
    const { where, data } = params;
    return this.prisma.manualReparaciones.update({
      data,
      where,
    });
  }

  removeManualReparaciones(
    where: Prisma.ManualReparacionesWhereUniqueInput
  ): Promise<ManualReparaciones> {
    return this.prisma.manualReparaciones.delete({
      where,
    });
  }
}
