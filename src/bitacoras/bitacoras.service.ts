import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Bitacora, Prisma } from '@prisma/client';

/**
 * Clase para la manipulación de la BD en el modulo bitacoras
 */
@Injectable()
export class BitacorasService {
  /**
   * Inicializacion  del servicio de prisma en la bitacora
   * @param prisma Servicio creado por la librería Prisma para manipular la BD
   */
  constructor(private prisma: PrismaService) {}

  /**
   * Función para obtener una bitacora por su id
   * @param bitacoraWhereUniqueInput Parametro creado por Prisma para obtener el id desde los parametros de una forma segura
   * @returns La bitacora con id indicado
   */
  bitacora(
    bitacoraWhereUniqueInput: Prisma.BitacoraWhereUniqueInput
  ): Promise<Bitacora | null> {
    return this.prisma.bitacora.findUnique({
      where: bitacoraWhereUniqueInput,
      include: {
        dispositivo: true,
        TecnicosBitacoras: {
          include: {
            tecnico: true,
          },
        },
        ReparacionesBitacoras: {
          include: {
            reparacion: true,
          },
        },
      },
    });
  }

  bitacoras(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BitacoraWhereUniqueInput;
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithRelationInput;
  }): Promise<Bitacora[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.bitacora.findMany({
      skip,
      take,
      cursor,
      where,
      include: {
        dispositivo: true,
        TecnicosBitacoras: {
          include: {
            tecnico: true,
          },
        },
        ReparacionesBitacoras: {
          include: {
            reparacion: true,
          },
        },
      },
      orderBy,
    });
  }

  createBitacora(data: Prisma.BitacoraCreateInput): Promise<Bitacora> {
    data.fecha_salida = new Date(data.fecha_salida);
    return this.prisma.bitacora.create({
      data,
    });
  }

  updateBitacora(params: {
    where: Prisma.BitacoraWhereUniqueInput;
    data: Prisma.BitacoraUpdateInput;
  }): Promise<Bitacora> {
    const { where, data } = params;
    return this.prisma.bitacora.update({
      data,
      where,
    });
  }

  removeBitacora(where: Prisma.BitacoraWhereUniqueInput): Promise<Bitacora> {
    return this.prisma.bitacora.delete({
      where,
    });
  }
}
