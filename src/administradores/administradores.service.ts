import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Administrador, Prisma } from '@prisma/client';

/**
 * Clase para la manipulación de la BD en el modulo administrador
 */
@Injectable()
export class AdministradoresService {
  /**
   * Inicializacion  del servicio de prisma en el administrador
   * @param prisma Servicio creado por la libreria Prisma para manipular la BD
   */
  constructor(private prisma: PrismaService) {}

  /**
   * Funcion para obtener un administrador por su id
   * @param administradorWhereUniqueInput Parametro creado por Prisma para obtener el id del administrador de forma segura
   * @returns El administrador con el id indicado
   */
  administrador(
    administradorWhereUniqueInput: Prisma.AdministradorWhereUniqueInput
  ): Promise<Administrador | null> {
    return this.prisma.administrador.findUnique({
      where: administradorWhereUniqueInput,
    });
  }

  /**
   * Función para obtener los administradores con filtros
   * @param params Parametros para el filtrado de datos en la consulta
   * @returns Los administradores filtrados
   */
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

  /**
   * Función para crear un administrador
   * @param data Datos para la creación del nuevo administrador
   * @returns El administrador creado
   */
  createAdministrador(
    data: Prisma.AdministradorCreateInput
  ): Promise<Administrador> {
    data.fecha_nacimiento = new Date(data.fecha_nacimiento);
    return this.prisma.administrador.create({
      data,
    });
  }

  /**
   * Función para editar un administrador por su id
   * @param params Parametros para la edición del administrador como los datos y el id
   * @returns El administrador con las ediciones
   */
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

  /**
   * Función para eliminar un administrador por Id
   * @param where Id del adminstrador a ser eliminado
   * @returns Un objeto vacío al eliminar el administrador
   */
  removeAdministrador(
    where: Prisma.AdministradorWhereUniqueInput
  ): Promise<Administrador> {
    return this.prisma.administrador.delete({
      where,
    });
  }
}
