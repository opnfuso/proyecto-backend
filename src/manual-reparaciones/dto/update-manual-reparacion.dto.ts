import { PartialType } from '@nestjs/mapped-types';
import { CreateManualReparacionDto } from './create-manual-reparacion.dto';

export class UpdateManualReparacionDto extends PartialType(
  CreateManualReparacionDto
) {}
