import { Injectable } from '@nestjs/common';
import { CreateManualReparacionDto } from './dto/create-manual-reparacion.dto';
import { UpdateManualReparacionDto } from './dto/update-manual-reparacion.dto';

@Injectable()
export class ManualReparacionesService {
  create(createManualReparacioneDto: CreateManualReparacionDto) {
    return 'This action adds a new manualReparacione';
  }

  findAll() {
    return `This action returns all manualReparaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manualReparacione`;
  }

  update(id: number, updateManualReparacioneDto: UpdateManualReparacionDto) {
    return `This action updates a #${id} manualReparacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} manualReparacione`;
  }
}
