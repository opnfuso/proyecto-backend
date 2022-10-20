import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../permissions.decorator';
import { PermissionsGuard } from '../permissions.guard';

/**
 * Clase controlador de administradores que define las rutas del path 'administradores' en la url
 */
@Controller('administradores')
export class AdministradoresController {
  /**
   * Constructor que instancia la clase servicio
   * @param administradoresService Clase servicio que permite el uso de la BD
   */
  constructor(
    private readonly administradoresService: AdministradoresService
  ) {}

  /**
   * Función create para la acción HTTP POST
   * @param createAdministradorDto Clase que valida el body de la petición al servidor
   * @returns El administrador creado
   */
  @Post()
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradoresService.createAdministrador(
      createAdministradorDto
    );
  }

  /**
   * Función findAll para la acción HTTP GET en la ruta base
   * @returns Un arreglo de todos los administradores en JSON
   */
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:administradores')
  @Get()
  findAll() {
    return this.administradoresService.administradores({});
  }

  /**
   * Función findOne para la acción HTTP GET en la ruta base con un parametro
   * @param id Identificador  del administrador a encontrar que se pasa por los paramentros de la url
   * @returns El administrador que tenga el id indicado o un error 404 en caso de no encontrarse
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const administrador = await this.administradoresService.administrador({
      id: Number(id),
    });
    if (administrador === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return administrador;
  }

  /**
   * Función update para la acción HTTP PATCH de la ruta base con un parametro
   * @param id Identificador del administrador a editar
   * @param updateAdministradorDto Validador de la información a editar desde el body
   * @returns El administrador editado
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdministradorDto: UpdateAdministradorDto
  ) {
    return this.administradoresService.updateAdministrador({
      data: updateAdministradorDto,
      where: { id: Number(id) },
    });
  }

  /**
   * Función remove para la acción HTTP DELETE de la ruta base con un parametro
   * @param id Identificador del adminstrador a eliminar
   * @returns El administrador eliminado
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradoresService.removeAdministrador({ id: Number(id) });
  }
}
