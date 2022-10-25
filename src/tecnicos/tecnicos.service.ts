import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tecnico, Prisma } from '@prisma/client';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { ManagementClient } from 'auth0';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

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

  async createTecnico(
    data: Prisma.TecnicoCreateInput,
    data2: CreateTecnicoDto
  ): Promise<Tecnico> {
    data.fecha_nacimiento = new Date(data.fecha_nacimiento);

    const management = new ManagementClient({
      domain: process.env.AUTH0_API_URL,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    });

    const user = await management.createUser({
      connection: process.env.AUTH0_CONNECTION,
      email: data2.email,
      password: data2.password,
    });

    await management.assignRolestoUser(
      { id: user.user_id },
      { roles: ['rol_XIuNvsk6EuuBcwSj'] }
    );

    const create: Prisma.TecnicoCreateInput = {
      apellidos: data.apellidos,
      email: data.email,
      fecha_nacimiento: data.fecha_nacimiento,
      nombres: data.nombres,
      telefono: data.telefono,
    };

    return this.prisma.tecnico.create({ data: create });
  }

  async updateTecnico(params: {
    where: Prisma.TecnicoWhereUniqueInput;
    data: Prisma.TecnicoUpdateInput;
    data2: UpdateTecnicoDto;
  }): Promise<Tecnico> {
    const { where, data, data2 } = params;
    data.fecha_nacimiento = new Date(data2.fecha_nacimiento);

    const management = new ManagementClient({
      domain: process.env.AUTH0_API_URL,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    });

    if (typeof data.email === 'string') {
      const oldUser = await this.prisma.tecnico.findUnique({ where });
      const user = await management.getUsersByEmail(oldUser.email);

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

      const update: Prisma.TecnicoUpdateInput = {
        apellidos: data.apellidos,
        email: data.email,
        fecha_nacimiento: data.fecha_nacimiento,
        nombres: data.nombres,
        telefono: data.telefono,
      };

      return this.prisma.tecnico.update({
        data: update,
        where,
      });
    }

    throw new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  removeTecnico(where: Prisma.TecnicoWhereUniqueInput): Promise<Tecnico> {
    return this.prisma.tecnico.delete({
      where,
    });
  }
}
