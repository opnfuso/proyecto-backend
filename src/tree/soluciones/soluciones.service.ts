import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSolucionDto } from './dto/create-solucion.dto';
import { UpdateSolucionDto } from './dto/update-solucion.dto';
import { Solucion, SolucionDocument } from './schema/soluciones.schema';

@Injectable()
export class SolucionesService {
  constructor(
    @InjectModel(Solucion.name)
    private solucionModel: Model<SolucionDocument>
  ) {}

  create(createSolucionDto: CreateSolucionDto) {
    return this.solucionModel.create(createSolucionDto);
  }

  findAll() {
    return this.solucionModel.find().exec();
  }

  findOne(id: string) {
    return this.solucionModel.findById(id);
  }

  findAllByRespuestaId(id: string) {
    return this.solucionModel
      .find({ respuesta: id })
      .populate('respuesta')
      .exec();
  }

  update(id: string, updateSolucionDto: UpdateSolucionDto) {
    return this.solucionModel.findByIdAndUpdate(id, updateSolucionDto);
  }

  remove(id: string) {
    return this.solucionModel.findByIdAndDelete(id);
  }
}
