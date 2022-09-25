import { PartialType } from '@nestjs/mapped-types';
import { CreateTecnicosBitacoraDto } from './create-tecnicos-bitacora.dto';

export class UpdateTecnicosBitacoraDto extends PartialType(
  CreateTecnicosBitacoraDto
) {}
