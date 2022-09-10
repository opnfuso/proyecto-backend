import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Administrador, Prisma } from '@prisma/client';

@Injectable()
export class AdministradoresService {
  constructor(private prisma: PrismaService) {}

  administrador(
    administradorWhereUniqueInput: Prisma.AdministradorWhereUniqueInput
  ): Promise<Administrador | null> {
    return this.prisma.administrador.findUnique({
      where: administradorWhereUniqueInput,
    });
  }

  administradores(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AdministradorWhereUniqueInput;
    where?: Prisma.AdministradorWhereInput;
    orderBy?: Prisma.AdministradorOrderByWithRelationInput;
  }): Promise<Administrador[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.administrador.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createAdministrador(
    data: Prisma.AdministradorCreateInput
  ): Promise<Administrador> {
    data.fecha_nacimiento = new Date(data.fecha_nacimiento);
    return this.prisma.administrador.create({
      data,
    });
  }

  updateAdministrador(params: {
    where: Prisma.AdministradorWhereUniqueInput;
    data: Prisma.AdministradorUpdateInput;
  }): Promise<Administrador> {
    const { where, data } = params;
    return this.prisma.administrador.update({
      data,
      where,
    });
  }

  removeAdministrador(
    where: Prisma.AdministradorWhereUniqueInput
  ): Promise<Administrador> {
    return this.prisma.administrador.delete({
      where,
    });
  }
}
