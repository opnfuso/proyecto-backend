import { Module } from '@nestjs/common';
import { ReparacionesBitacorasService } from './reparaciones-bitacoras.service';
import { ReparacionesBitacorasController } from './reparaciones-bitacoras.controller';

@Module({
  controllers: [ReparacionesBitacorasController],
  providers: [ReparacionesBitacorasService],
})
export class ReparacionesBitacorasModule {}
