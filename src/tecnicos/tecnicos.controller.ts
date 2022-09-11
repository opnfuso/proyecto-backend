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
import { TecnicosService } from './tecnicos.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Controller('tecnicos')
export class TecnicosController {
  constructor(private readonly tecnicosService: TecnicosService) {}

  @Post()
  create(@Body() createTecnicoDto: CreateTecnicoDto) {
    return this.tecnicosService.createTecnico(createTecnicoDto);
  }

  @Get()
  findAll() {
    return this.tecnicosService.tecnicos({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tecnico = await this.tecnicosService.tecnico({
      id: Number(id),
    });
    if (tecnico === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return tecnico;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTecnicoDto: UpdateTecnicoDto) {
    return this.tecnicosService.updateTecnico({
      data: updateTecnicoDto,
      where: { id: Number(id) },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tecnicosService.removeTecnico({ id: Number(id) });
  }
}
