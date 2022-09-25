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
import { TecnicosBitacorasService } from './tecnicos-bitacoras.service';
import { CreateTecnicosBitacoraDto } from './dto/create-tecnicos-bitacora.dto';
import { UpdateTecnicosBitacoraDto } from './dto/update-tecnicos-bitacora.dto';

@Controller('tecnicos-bitacorass')
export class TecnicosBitacorassBitacorasController {
  constructor(
    private readonly tecnicosBitacorassService: TecnicosBitacorasService
  ) {}

  @Post()
  create(@Body() createTecnicosBitacorasDto: CreateTecnicosBitacoraDto) {
    return this.tecnicosBitacorassService.createTecnicosBitacoras(
      createTecnicosBitacorasDto
    );
  }

  @Get()
  findAll() {
    return this.tecnicosBitacorassService.tecnicosBitacorass({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tecnicosBitacoras =
      await this.tecnicosBitacorassService.tecnicosBitacoras({
        id: Number(id),
      });
    if (tecnicosBitacoras === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return tecnicosBitacoras;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTecnicosBitacorasDto: UpdateTecnicosBitacoraDto
  ) {
    return this.tecnicosBitacorassService.updateTecnicosBitacoras({
      data: updateTecnicosBitacorasDto,
      where: { id: Number(id) },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tecnicosBitacorassService.removeTecnicosBitacoras({
      id: Number(id),
    });
  }
}
