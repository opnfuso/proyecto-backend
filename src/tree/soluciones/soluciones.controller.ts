import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSolucionDto } from './dto/create-solucion.dto';
import { UpdateSolucionDto } from './dto/update-solucion.dto';
import { SolucionesService } from './soluciones.service';

@Controller('soluciones')
export class SolucionesController {
  constructor(private readonly solucionService: SolucionesService) {}

  @Post()
  create(@Body() createSolucionDto: CreateSolucionDto) {
    return this.solucionService.create(createSolucionDto);
  }

  @Get()
  findAll() {
    return this.solucionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solucionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolucionDto: UpdateSolucionDto
  ) {
    return this.solucionService.update(id, updateSolucionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.solucionService.remove(id);
  }
}
