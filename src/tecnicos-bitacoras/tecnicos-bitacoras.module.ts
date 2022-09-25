import { Module } from '@nestjs/common';
import { TecnicosBitacorasService } from './tecnicos-bitacoras.service';
import { TecnicosBitacorasController } from './tecnicos-bitacoras.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TecnicosBitacorasController],
  providers: [TecnicosBitacorasService, PrismaService],
})
export class TecnicosBitacorasModule {}
