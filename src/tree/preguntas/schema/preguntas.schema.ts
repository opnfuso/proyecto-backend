import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PreguntaDocument = Document & Pregunta;

@Schema()
export class Pregunta {
  @Prop({ required: true })
  text: string;
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);
