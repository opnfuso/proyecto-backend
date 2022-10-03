import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { RespuestasService } from './respuestas.service';

@Controller('respuestas')
export class RespuestasController {
  constructor(private readonly respuestaService: RespuestasService) {}

  @Post()
  create(@Body() createRespuestaDto: CreateRespuestaDto) {
    return this.respuestaService.create(createRespuestaDto);
  }

  @Get()
  findAll() {
    return this.respuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respuestaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRespuestaDto: UpdateRespuestaDto
  ) {
    return this.respuestaService.update(id, updateRespuestaDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.respuestaService.remove(id);
  }
}
