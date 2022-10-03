import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSolucionDto {
  @IsMongoId()
  pregunta: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  text: string;
}
