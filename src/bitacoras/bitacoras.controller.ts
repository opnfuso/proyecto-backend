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
import { BitacorasService } from './bitacoras.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';

@Controller('bitacoras')
export class BitacorasController {
  constructor(private readonly bitacorasService: BitacorasService) {}

  @Post()
  create(@Body() createBitacoraDto: CreateBitacoraDto) {
    return this.bitacorasService.createBitacora(createBitacoraDto);
  }

  @Get()
  findAll() {
    return this.bitacorasService.bitacoras({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bitacora = await this.bitacorasService.bitacora({
      id: Number(id),
    });
    if (bitacora === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return bitacora;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBitacoraDto: UpdateBitacoraDto
  ) {
    return this.bitacorasService.updateBitacora({
      data: updateBitacoraDto,
      where: { id: Number(id) },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bitacorasService.removeBitacora({ id: Number(id) });
  }
}
