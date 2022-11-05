import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { SendEmailDto } from './dto/send-email.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { PreguntasService } from './preguntas.service';

@Controller('preguntas')
export class PreguntasController {
  constructor(private readonly preguntaService: PreguntasService) {}

  @Post()
  create(@Body() createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaService.create(createPreguntaDto);
  }

  @Post('email')
  sendEmail(@Body() sendEmailDto: SendEmailDto) {
    return this.preguntaService.sendEmail(sendEmailDto);
  }

  @Get()
  findAll() {
    return this.preguntaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preguntaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePreguntaDto: UpdatePreguntaDto
  ) {
    return this.preguntaService.update(id, updatePreguntaDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.preguntaService.remove(id);
  }
}
