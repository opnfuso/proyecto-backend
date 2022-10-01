import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';
import { Respuesta } from 'src/tree/respuestas/schema/respuestas.schema';

export type SolucionDocument = Document & Solucion;

@Schema()
export class Solucion {
  @Prop({ required: true, type: MSchema.Types.ObjectId, ref: Respuesta.name })
  respuesta: Respuesta;

  @Prop({ required: true })
  text: string;
}

export const SolucionSchema = SchemaFactory.createForClass(Solucion);
