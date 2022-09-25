import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TecnicosBitacoras, Prisma } from '@prisma/client';

@Injectable()
export class TecnicosBitacorasService {
  constructor(private prisma: PrismaService) {}

  tecnicosBitacoras(
    tecnicosBitacorasWhereUniqueInput: Prisma.TecnicosBitacorasWhereUniqueInput
  ): Promise<TecnicosBitacoras | null> {
    return this.prisma.tecnicosBitacoras.findUnique({
      where: tecnicosBitacorasWhereUniqueInput,
      include: {
        bitacora: true,
        tecnico: true,
      },
    });
  }

  tecnicosBitacorass(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TecnicosBitacorasWhereUniqueInput;
    where?: Prisma.TecnicosBitacorasWhereInput;
    orderBy?: Prisma.TecnicosBitacorasOrderByWithRelationInput;
  }): Promise<TecnicosBitacoras[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tecnicosBitacoras.findMany({
      skip,
      take,
      cursor,
      where,
      include: {
        bitacora: true,
        tecnico: true,
      },
      orderBy,
    });
  }

  createTecnicosBitacoras(
    data: Prisma.TecnicosBitacorasCreateInput
  ): Promise<TecnicosBitacoras> {
    return this.prisma.tecnicosBitacoras.create({
      data,
    });
  }

  updateTecnicosBitacoras(params: {
    where: Prisma.TecnicosBitacorasWhereUniqueInput;
    data: Prisma.TecnicosBitacorasUpdateInput;
  }): Promise<TecnicosBitacoras> {
    const { where, data } = params;
    return this.prisma.tecnicosBitacoras.update({
      data,
      where,
    });
  }

  removeTecnicosBitacoras(
    where: Prisma.TecnicosBitacorasWhereUniqueInput
  ): Promise<TecnicosBitacoras> {
    return this.prisma.tecnicosBitacoras.delete({
      where,
    });
  }
}
