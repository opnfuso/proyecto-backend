import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManualReparacionesService } from './manual-reparaciones.service';
import { CreateManualReparacionDto } from './dto/create-manual-reparacion.dto';
import { UpdateManualReparacionDto } from './dto/update-manual-reparacion.dto';

@Controller('manual-reparaciones')
export class ManualReparacionesController {
  constructor(
    private readonly manualReparacionesService: ManualReparacionesService
  ) {}

  @Post()
  create(@Body() createManualReparacioneDto: CreateManualReparacionDto) {
    return this.manualReparacionesService.create(createManualReparacioneDto);
  }

  @Get()
  findAll() {
    return this.manualReparacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manualReparacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManualReparacioneDto: UpdateManualReparacionDto
  ) {
    return this.manualReparacionesService.update(
      +id,
      updateManualReparacioneDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manualReparacionesService.remove(+id);
  }
}
