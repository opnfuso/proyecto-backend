import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tecnico, Prisma } from '@prisma/client';

@Injectable()
export class TecnicosService {
  constructor(private prisma: PrismaService) {}

  async tecnico(
    tecnicoWhereUniqueInput: Prisma.TecnicoWhereUniqueInput
  ): Promise<Tecnico | null> {
    const tecnico = await this.prisma.tecnico.findUnique({
      where: tecnicoWhereUniqueInput,
      include: {
        TecnicosBitacoras: {
          include: {
            bitacora: true,
          },
        },
      },
    });

    tecnico['fecha_nacimiento_string'] =
      tecnico.fecha_nacimiento.toLocaleDateString('es-MX');

    return tecnico;
  }

  async tecnicos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TecnicoWhereUniqueInput;
    where?: Prisma.TecnicoWhereInput;
    orderBy?: Prisma.TecnicoOrderByWithRelationInput;
  }): Promise<Tecnico[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const tecnicos = await this.prisma.tecnico.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        TecnicosBitacoras: {
          include: {
            bitacora: true,
          },
        },
      },
    });

    const result = tecnicos.map((tecnico) => {
      tecnico['fecha_nacimiento_string'] =
        tecnico.fecha_nacimiento.toLocaleDateString('es-MX');
      return tecnico;
    });

    return result;
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
