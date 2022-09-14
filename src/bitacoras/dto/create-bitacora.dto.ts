import { Prisma } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBitacoraDto {
  @IsString()
  imei_dispositivo: string;

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
