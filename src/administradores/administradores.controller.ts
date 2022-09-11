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
} from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Controller('administradores')
export class AdministradoresController {
  constructor(
    private readonly administradoresService: AdministradoresService
  ) {}

  @Post()
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradoresService.createAdministrador(
      createAdministradorDto
    );
  }

  @Get()
  findAll() {
    return this.administradoresService.administradores({});
  }

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradoresService.removeAdministrador({ id: Number(id) });
  }
}
