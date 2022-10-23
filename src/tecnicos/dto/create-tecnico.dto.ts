import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsPhoneNumber,
  IsOptional,
  IsBoolean,
  IsEmail,
} from 'class-validator';

export class CreateTecnicoDto {
  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsDateString()
  fecha_nacimiento: Date;

  @IsPhoneNumber()
  telefono: string;

  @IsOptional()
  @IsBoolean()
  activo: boolean;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
