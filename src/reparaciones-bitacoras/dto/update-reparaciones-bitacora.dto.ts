import { PartialType } from '@nestjs/mapped-types';
import { CreateReparacionesBitacoraDto } from './create-reparaciones-bitacora.dto';

export class UpdateReparacionesBitacoraDto extends PartialType(
  CreateReparacionesBitacoraDto
) {}
