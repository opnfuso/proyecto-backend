import { Module } from '@nestjs/common';
import { PreguntasController } from './preguntas/preguntas.controller';
import { RespuestasController } from './respuestas/respuestas.controller';
import { PreguntasService } from './preguntas/preguntas.service';
import { RespuestasService } from './respuestas/respuestas.service';
import { SolucionesController } from './soluciones/soluciones.controller';
import { SolucionesService } from './soluciones/soluciones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pregunta, PreguntaSchema } from './preguntas/schema/preguntas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pregunta.name, schema: PreguntaSchema },
    ]),
  ],
  controllers: [
    PreguntasController,
    RespuestasController,
    SolucionesController,
  ],
  providers: [PreguntasService, RespuestasService, SolucionesService],
})
export class TreeModule {}
