import { IsNotEmpty, IsString } from 'class-validator';

export class CreateManualReparacionDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;
}
