import { PartialType } from '@nestjs/mapped-types';
import { CreateTreeBitacoraDto } from './create-tree-bitacora.dto';

export class UpdateTreeBitacoraDto extends PartialType(CreateTreeBitacoraDto) {}
