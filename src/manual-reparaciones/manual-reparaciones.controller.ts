import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
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
  create(@Body() createManualReparacionDto: CreateManualReparacionDto) {
    return this.manualReparacionesService.createManualReparaciones(
      createManualReparacionDto
    );
  }

  @Get()
  findAll() {
    return this.manualReparacionesService.manualReparacioness({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ManualReparaciones =
      await this.manualReparacionesService.manualReparaciones({
        id: Number(id),
      });
    if (ManualReparaciones === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return ManualReparaciones;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManualReparacionDto: UpdateManualReparacionDto
  ) {
    return this.manualReparacionesService.updateManualReparaciones({
      data: updateManualReparacionDto,
      where: { id: Number(id) },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manualReparacionesService.removeManualReparaciones({
      id: Number(id),
    });
  }
}
