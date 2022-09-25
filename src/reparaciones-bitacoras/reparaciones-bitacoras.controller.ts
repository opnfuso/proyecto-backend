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
import { ReparacionesBitacorasService } from './reparaciones-bitacoras.service';
import { CreateReparacionesBitacoraDto } from './dto/create-reparaciones-bitacora.dto';
import { UpdateReparacionesBitacoraDto } from './dto/update-reparaciones-bitacora.dto';

@Controller('reparaciones-bitacoras')
export class ReparacionesBitacorassBitacorasController {
  constructor(
    private readonly reparacionesBitacorassService: ReparacionesBitacorasService
  ) {}

  @Post()
  create(
    @Body() createReparacionesBitacorasDto: CreateReparacionesBitacoraDto
  ) {
    return this.reparacionesBitacorassService.createReparacionesBitacoras(
      createReparacionesBitacorasDto
    );
  }

  @Get()
  findAll() {
    return this.reparacionesBitacorassService.reparacionesBitacorass({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const reparacionesBitacoras =
      await this.reparacionesBitacorassService.reparacionesBitacoras({
        id: Number(id),
      });
    if (reparacionesBitacoras === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return reparacionesBitacoras;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReparacionesBitacorasDto: UpdateReparacionesBitacoraDto
  ) {
    return this.reparacionesBitacorassService.updateReparacionesBitacoras({
      data: updateReparacionesBitacorasDto,
      where: { id: Number(id) },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reparacionesBitacorassService.removeReparacionesBitacoras({
      id: Number(id),
    });
  }
}
