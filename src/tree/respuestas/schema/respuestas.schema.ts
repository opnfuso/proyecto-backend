import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';
import { Pregunta } from 'src/tree/preguntas/schema/preguntas.schema';

export type RespuestaDocument = Document & Respuesta;

@Schema()
export class Respuesta {
  @Prop({ required: true, type: MSchema.Types.ObjectId, ref: Pregunta.name })
  pregunta: Pregunta;

  @Prop({ required: true })
  text: string;

  @Prop({ required: false, type: MSchema.Types.ObjectId, ref: Pregunta.name })
  siguiente_pregunta: Pregunta;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);
