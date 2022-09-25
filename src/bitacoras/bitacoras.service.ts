import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Bitacora, Prisma } from '@prisma/client';

@Injectable()
export class BitacorasService {
  constructor(private prisma: PrismaService) {}

  /**
   * Regresa la bitacora que coincida con el id
   * @param bitacoraWhereUniqueInput Parametro seguro autogenerado por prisma que obtiene un id
   * @returns Una bitacora
   */
  bitacora(
    bitacoraWhereUniqueInput: Prisma.BitacoraWhereUniqueInput
  ): Promise<Bitacora | null> {
    return this.prisma.bitacora.findUnique({
      where: bitacoraWhereUniqueInput,
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
