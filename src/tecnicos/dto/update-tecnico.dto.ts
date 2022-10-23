import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateTecnicoDto } from './create-tecnico.dto';

export class UpdateTecnicoDto extends PartialType(CreateTecnicoDto) {
  @IsString()
  password?: string;
}
