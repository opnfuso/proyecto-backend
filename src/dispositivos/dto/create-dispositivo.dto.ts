import { Prisma } from '@prisma/client';
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateDispositivoDto {
  @IsString()
  imei: string;

  @IsString()
  modelo: string;

  @IsString()
  marca: string;

  @IsString()
  numero_serie: string;

  @IsDateString()
  fecha_recibido: string;

  @IsInt()
  id_cliente: number;

  cliente: Prisma.ClienteCreateNestedOneWithoutDispositivoInput;
}
