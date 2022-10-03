import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateRespuestaDto {
  @IsMongoId()
  pregunta: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsOptional()
  @IsMongoId()
  siguiente_pregunta: Types.ObjectId;
}
