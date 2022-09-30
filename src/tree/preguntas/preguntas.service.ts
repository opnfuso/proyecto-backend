import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pregunta, PreguntaDocument } from './schema/preguntas.schema';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectModel(Pregunta.name)
    private preguntaModel: Model<PreguntaDocument>
  ) {}

  findAll() {
    return this.preguntaModel.find().exec();
  }
}
