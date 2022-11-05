import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { SendEmailDto } from './dto/send-email.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Pregunta, PreguntaDocument } from './schema/preguntas.schema';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;
@Injectable()
export class PreguntasService {
  constructor(
    @InjectModel(Pregunta.name)
    private preguntaModel: Model<PreguntaDocument>
  ) {}

  create(createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaModel.create(createPreguntaDto);
  }

  findAll() {
    return this.preguntaModel.find().exec();
  }

  findOne(id: string) {
    return this.preguntaModel.findById(id);
  }

  update(id: string, updatePreguntaDto: UpdatePreguntaDto) {
    return this.preguntaModel.findByIdAndUpdate(id, updatePreguntaDto);
  }

  sendEmail = async (sendEmailDto: SendEmailDto) => {
    const { mensaje, dispositivo, pregunta } = sendEmailDto;
    const options = {
      method: 'POST',
      url: process.env.RAPIDAPI_EMAIL_URL,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_EMAIL_HOST,
      },
      data: `{"personalizations":[{"to":[{"email":"opnfuso@gmail.com"}],"subject":"Nueva pregunta para el arbol!"}],"from":{"email":"mobile_helper@example.com"},"content":[{"type":"text/plain","value":" ${dispositivo} \\n Pregunta: ${pregunta} \\n ${mensaje}"}]}`,
    };

    await axios.request(options);
  };

  remove(id: string) {
    return this.preguntaModel.findByIdAndDelete(id);
  }
}
