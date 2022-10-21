import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Administrador, Prisma } from '@prisma/client';
import { AppMetadata, ManagementClient, User, UserMetadata } from 'auth0';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

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
  async administrador(
    administradorWhereUniqueInput: Prisma.AdministradorWhereUniqueInput
  ): Promise<Administrador | null> {
    const administrador = await this.prisma.administrador.findUnique({
      where: administradorWhereUniqueInput,
    });

    administrador['fecha_nacimiento_string'] =
      administrador.fecha_nacimiento.toLocaleDateString('es-MX');

    return administrador;
  }

  /**
   * Función para obtener los administradores con filtros
   * @param params Parametros para el filtrado de datos en la consulta
   * @returns Los administradores filtrados
   */
  async administradores(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AdministradorWhereUniqueInput;
    where?: Prisma.AdministradorWhereInput;
    orderBy?: Prisma.AdministradorOrderByWithRelationInput;
  }): Promise<Administrador[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const administradores = await this.prisma.administrador.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });

    const result = administradores.map((administrador) => {
      administrador['fecha_nacimiento_string'] =
        administrador.fecha_nacimiento.toLocaleDateString('es-MX');
      return administrador;
    });

    return result;
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
  async updateAdministrador(params: {
    where: Prisma.AdministradorWhereUniqueInput;
    data: Prisma.AdministradorUpdateInput;
    data2: UpdateAdministradorDto;
  }): Promise<Administrador> {
    const { where, data, data2 } = params;

    data.fecha_nacimiento = new Date(data2.fecha_nacimiento);

    const management = new ManagementClient({
      domain: process.env.AUTH0_API_URL,
      token: process.env.AUTH0_API_TOKEN,
      audience: process.env.AUTH0_AUDIENCE,
    });

    if (typeof data.email === 'string') {
      const user = await management.getUsersByEmail(data.email);

      if (data2.password.length > 0) {
        await management.updateUser(
          { id: user[0].user_id },
          { email: data.email, password: data2.password }
        );
      } else {
        await management.updateUser(
          { id: user[0].user_id },
          { email: data.email }
        );
      }

      const update: Prisma.AdministradorUpdateInput = {
        apellidos: data.apellidos,
        email: data.email,
        fecha_nacimiento: data.fecha_nacimiento,
        nombres: data.nombres,
        telefono: data.telefono,
      };

      return this.prisma.administrador.update({
        data: update,
        where,
      });
    }

    throw new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
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
