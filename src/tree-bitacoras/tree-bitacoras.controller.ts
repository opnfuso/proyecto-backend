import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreeBitacorasService } from './tree-bitacoras.service';
import { CreateTreeBitacoraDto } from './dto/create-tree-bitacora.dto';
import { UpdateTreeBitacoraDto } from './dto/update-tree-bitacora.dto';

@Controller('tree-bitacoras')
export class TreeBitacorasController {
  constructor(private readonly treeBitacorasService: TreeBitacorasService) {}

  @Post()
  create(@Body() createTreeBitacoraDto: CreateTreeBitacoraDto) {
    return this.treeBitacorasService.create(createTreeBitacoraDto);
  }

  @Get()
  findAll() {
    return this.treeBitacorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treeBitacorasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreeBitacoraDto: UpdateTreeBitacoraDto) {
    return this.treeBitacorasService.update(+id, updateTreeBitacoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treeBitacorasService.remove(+id);
  }
}
