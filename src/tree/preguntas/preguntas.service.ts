import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
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

  findOne(id: string) {
    return this.preguntaModel.findById(id);
  }

  update(id: string, updatePreguntaDto: UpdatePreguntaDto) {
    return this.preguntaModel.findByIdAndUpdate(id, updatePreguntaDto);
  }

  remove(id: string) {
    return this.preguntaModel.findByIdAndDelete(id);
  }
}
