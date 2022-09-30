import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { Pregunta, PreguntaDocument } from './schema/preguntas.schema';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectModel(Pregunta.name)
    private preguntaModel: Model<PreguntaDocument>
  ) {}

  create(createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaModel.create(createPreguntaDto);
  }

  findAll() {
    return this.preguntaModel.find().exec();
  }
}
