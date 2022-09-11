import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsPhoneNumber,
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
}
