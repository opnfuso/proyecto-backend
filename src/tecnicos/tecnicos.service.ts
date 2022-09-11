import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tecnico, Prisma } from '@prisma/client';

@Injectable()
export class TecnicosService {
  constructor(private prisma: PrismaService) {}

  tecnico(
    tecnicoWhereUniqueInput: Prisma.TecnicoWhereUniqueInput
  ): Promise<Tecnico | null> {
    return this.prisma.tecnico.findUnique({
      where: tecnicoWhereUniqueInput,
    });
  }

  tecnicos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TecnicoWhereUniqueInput;
    where?: Prisma.TecnicoWhereInput;
    orderBy?: Prisma.TecnicoOrderByWithRelationInput;
  }): Promise<Tecnico[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tecnico.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createTecnico(data: Prisma.TecnicoCreateInput): Promise<Tecnico> {
    data.fecha_nacimiento = new Date(data.fecha_nacimiento);
    return this.prisma.tecnico.create({
      data,
    });
  }

  updateTecnico(params: {
    where: Prisma.TecnicoWhereUniqueInput;
    data: Prisma.TecnicoUpdateInput;
  }): Promise<Tecnico> {
    const { where, data } = params;
    return this.prisma.tecnico.update({
      data,
      where,
    });
  }

  removeTecnico(where: Prisma.TecnicoWhereUniqueInput): Promise<Tecnico> {
    return this.prisma.tecnico.delete({
      where,
    });
  }
}
