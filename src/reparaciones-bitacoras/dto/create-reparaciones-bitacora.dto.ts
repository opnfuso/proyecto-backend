import { Prisma } from '@prisma/client';
import { IsInt } from 'class-validator';

export class CreateReparacionesBitacoraDto {
  @IsInt()
  manualReparacionesId: number;

  @IsInt()
  bitacoraId: number;

  reparacion: Prisma.ManualReparacionesCreateNestedOneWithoutReparacionesBitacorasInput;
  bitacora: Prisma.BitacoraCreateNestedOneWithoutReparacionesBitacorasInput;
}
