import { Prisma } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

/**
 * Clase para hacer la validación al crear las bitacoras
 */
export class CreateBitacoraDto {
  /**Imei del dispositivo que será usado como un id */
  @IsString()
  imei_dispositivo: string;

  /**Fecha de salida del dispositivo al terminar la reparación */
  @IsOptional()
  @IsDateString()
  fecha_salida: string;

  /**Costo final de la reparación */
  @IsOptional()
  @IsNumber()
  costo: number;

  /**Notas opcionales  */
  @IsOptional()
  @IsString()
  notas: string;

  @IsDateString()
  fecha_recibido: string;

  /**Booleano que indica si la reparación está terminada */
  @IsOptional()
  @IsBoolean()
  terminado: boolean;

  /**Booleano que indica si la reparación fue exitosa */
  @IsOptional()
  @IsBoolean()
  reparado: boolean;

  /**Dispositivo de la bitacora */
  dispositivo: Prisma.DispositivoCreateNestedOneWithoutBitacoraInput;
}
