import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { Respuesta, RespuestaDocument } from './schema/respuestas.schema';

@Injectable()
export class RespuestasService {
  constructor(
    @InjectModel(Respuesta.name)
    private respuestaModel: Model<RespuestaDocument>
  ) {}

  create(createRespuestaDto: CreateRespuestaDto) {
    return this.respuestaModel.create(createRespuestaDto);
  }

  findAll() {
    return this.respuestaModel.find().exec();
  }

  findOne(id: string) {
    return this.respuestaModel.findById(id).exec();
  }

  findAllByPreguntaId(id: string) {
    return this.respuestaModel
      .find({ pregunta: id })
      .populate('pregunta')
      .exec();
  }

  update(id: string, updateRespuestaDto: UpdateRespuestaDto) {
    return this.respuestaModel.findByIdAndUpdate(id, updateRespuestaDto);
  }

  remove(id: string) {
    return this.respuestaModel.findByIdAndDelete(id);
  }
}
