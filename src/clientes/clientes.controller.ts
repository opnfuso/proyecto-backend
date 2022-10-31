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
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.createCliente(createClienteDto);
  }

  @Get()
  async findAll() {
    return this.clientesService.clientes({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cliente = await this.clientesService.cliente({
      id: Number(id),
    });
    if (cliente === null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return cliente;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.updateCliente({
      data: updateClienteDto,
      where: { id: Number(id) },
    });
  }

  @Patch('/activate/:id')
  activate(@Param('id') id: string) {
    return this.clientesService.activateTecnico({ id: Number(id) });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.removeCliente({ id: Number(id) });
  }
}
