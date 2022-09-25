import { Module } from '@nestjs/common';
import { ReparacionesBitacorasService } from './reparaciones-bitacoras.service';
import { ReparacionesBitacorasController } from './reparaciones-bitacoras.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ReparacionesBitacorasController],
  providers: [ReparacionesBitacorasService, PrismaService],
})
export class ReparacionesBitacorasModule {}
