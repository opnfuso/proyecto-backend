import { Controller, Get } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';

@Controller('preguntas')
export class PreguntasController {
  constructor(private readonly preguntaService: PreguntasService) {}

  @Get()
  findAll() {
    return this.preguntaService.findAll();
  }
}
