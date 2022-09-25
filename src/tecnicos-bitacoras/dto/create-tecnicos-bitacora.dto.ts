import { Prisma } from '@prisma/client';
import { IsInt } from 'class-validator';

export class CreateTecnicosBitacoraDto {
  @IsInt()
  tecnicoId: number;

  @IsInt()
  bitacoraId: number;

  tecnico: Prisma.TecnicoCreateNestedOneWithoutTecnicosBitacorasInput;

  bitacora: Prisma.BitacoraCreateNestedOneWithoutReparacionesBitacorasInput;
}
