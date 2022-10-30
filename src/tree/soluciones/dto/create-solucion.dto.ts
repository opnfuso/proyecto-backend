import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSolucionDto {
  @IsMongoId()
  respuesta: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  text: string;
}
