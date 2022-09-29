import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradorDto } from './create-administrador.dto';

/**
 * Clase que hereda de 'CreateAdministradorDTO' y hace opcionales todos  los atributos
 */
export class UpdateAdministradorDto extends PartialType(
  CreateAdministradorDto
) {}
