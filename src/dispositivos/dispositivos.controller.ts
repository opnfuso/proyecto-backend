import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';

@Controller('dispositivos')
export class DispositivosController {
  constructor(private readonly dispositivosService: DispositivosService) {}

  @Post()
  create(@Body() createDispositivoDto: CreateDispositivoDto) {
    return this.dispositivosService.createDispositivo(createDispositivoDto);
  }

  @Get()
  findAll() {
    return this.dispositivosService.dispositivos({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dispositivo = await this.dispositivosService.dispositivo({
      imei: id,
    });
    if (dispositivo === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return dispositivo;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDispositivoDto: UpdateDispositivoDto
  ) {
    return this.dispositivosService.updateDispositivo({
      data: updateDispositivoDto,
      where: { imei: id },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispositivosService.removeDispositivo({ imei: id });
  }
}
