import { PartialType } from '@nestjs/mapped-types';
import { CreateBitacoraDto } from './create-bitacora.dto';

/**
 * Clase que hereda de 'CreateBitacoraDto' y hace opcionales todos los atributos para la validación en la actualización de datos
 */
export class UpdateBitacoraDto extends PartialType(CreateBitacoraDto) {}
