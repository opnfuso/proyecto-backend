import { Module } from '@nestjs/common';
import { PreguntasController } from './preguntas/preguntas.controller';
import { RespuestasController } from './respuestas/respuestas.controller';
import { PreguntasService } from './preguntas/preguntas.service';
import { RespuestasService } from './respuestas/respuestas.service';
import { SolucionesController } from './soluciones/soluciones.controller';
import { SolucionesService } from './soluciones/soluciones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pregunta, PreguntaSchema } from './preguntas/schema/preguntas.schema';
import {
  Respuesta,
  RespuestaSchema,
} from './respuestas/schema/respuestas.schema';
import {
  Solucion,
  SolucionSchema,
} from './soluciones/schema/soluciones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pregunta.name, schema: PreguntaSchema },
    ]),
    MongooseModule.forFeature([
      { name: Respuesta.name, schema: RespuestaSchema },
    ]),
    MongooseModule.forFeature([
      { name: Solucion.name, schema: SolucionSchema },
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
