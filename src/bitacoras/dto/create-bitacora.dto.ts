import { Prisma } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBitacoraDto {
  @IsInt()
  imei_dispositivo: number;

  @IsDateString()
  fecha_salida: string;

  @IsNumber()
  costo: number;

  @IsOptional()
  @IsString()
  notas: string;

  @IsOptional()
  @IsBoolean()
  terminado: boolean;

  dispositivo: Prisma.DispositivoCreateNestedOneWithoutBitacoraInput;
}
