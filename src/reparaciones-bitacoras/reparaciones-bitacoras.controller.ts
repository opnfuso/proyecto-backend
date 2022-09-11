import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReparacionesBitacorasService } from './reparaciones-bitacoras.service';
import { CreateReparacionesBitacoraDto } from './dto/create-reparaciones-bitacora.dto';
import { UpdateReparacionesBitacoraDto } from './dto/update-reparaciones-bitacora.dto';

@Controller('reparaciones-bitacoras')
export class ReparacionesBitacorasController {
  constructor(
    private readonly reparacionesBitacorasService: ReparacionesBitacorasService
  ) {}

  @Post()
  create(@Body() createReparacionesBitacoraDto: CreateReparacionesBitacoraDto) {
    return this.reparacionesBitacorasService.create(
      createReparacionesBitacoraDto
    );
  }

  @Get()
  findAll() {
    return this.reparacionesBitacorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reparacionesBitacorasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReparacionesBitacoraDto: UpdateReparacionesBitacoraDto
  ) {
    return this.reparacionesBitacorasService.update(
      +id,
      updateReparacionesBitacoraDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reparacionesBitacorasService.remove(+id);
  }
}
