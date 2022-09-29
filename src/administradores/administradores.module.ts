import { Module } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { AdministradoresController } from './administradores.controller';
import { PrismaService } from 'src/prisma.service';

/**
 * Modulo principal de los administradores donde se importan los controladores y proveedores y al exportarse se puede importar y utilizar en otro modulo
 */
@Module({
  controllers: [AdministradoresController],
  providers: [AdministradoresService, PrismaService],
})
export class AdministradoresModule {}
