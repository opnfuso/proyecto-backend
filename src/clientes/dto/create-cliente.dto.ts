import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsPhoneNumber,
  IsEmail,
} from 'class-validator';

export class CreateClienteDto {
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

  @IsString()
  @IsNotEmpty()
  domicilio: string;

  @IsEmail()
  email: string;
}
