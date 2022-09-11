import { Injectable } from '@nestjs/common';
import { CreateReparacionesBitacoraDto } from './dto/create-reparaciones-bitacora.dto';
import { UpdateReparacionesBitacoraDto } from './dto/update-reparaciones-bitacora.dto';

@Injectable()
export class ReparacionesBitacorasService {
  create(createReparacionesBitacoraDto: CreateReparacionesBitacoraDto) {
    return 'This action adds a new reparacionesBitacora';
  }

  findAll() {
    return `This action returns all reparacionesBitacoras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reparacionesBitacora`;
  }

  update(
    id: number,
    updateReparacionesBitacoraDto: UpdateReparacionesBitacoraDto
  ) {
    return `This action updates a #${id} reparacionesBitacora`;
  }

  remove(id: number) {
    return `This action removes a #${id} reparacionesBitacora`;
  }
}
