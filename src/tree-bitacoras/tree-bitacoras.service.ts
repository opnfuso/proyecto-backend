import { Injectable } from '@nestjs/common';
import { CreateTreeBitacoraDto } from './dto/create-tree-bitacora.dto';
import { UpdateTreeBitacoraDto } from './dto/update-tree-bitacora.dto';

@Injectable()
export class TreeBitacorasService {
  create(createTreeBitacoraDto: CreateTreeBitacoraDto) {
    return 'This action adds a new treeBitacora';
  }

  findAll() {
    return `This action returns all treeBitacoras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} treeBitacora`;
  }

  update(id: number, updateTreeBitacoraDto: UpdateTreeBitacoraDto) {
    return `This action updates a #${id} treeBitacora`;
  }

  remove(id: number) {
    return `This action removes a #${id} treeBitacora`;
  }
}
