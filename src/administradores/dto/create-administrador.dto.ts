import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

import{
  Unique,
} from 'typeorm';

@Unique(['email'])
/**
 * Clase para la validación de datos al crear el Administrador
 */
export class CreateAdministradorDto {
  /**
   * Nombres del administrador
   */
  @IsString()
  @IsNotEmpty()
  nombres: string;

  /**
   * Apellidos del administrador
   */
  @IsString()
  @IsNotEmpty()
  apellidos: string;

  /**
   * Fecha de nacimiento del administrador
   */
  @IsDateString()
  fecha_nacimiento: string;

  /**
   * Telefono del administrador
   */
  @IsPhoneNumber()
  telefono: string;

  /**
   * Campo activo para saber si el administrador esta activo en el sistema
   */
  @IsOptional()
  @IsBoolean()
  activo: boolean;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

