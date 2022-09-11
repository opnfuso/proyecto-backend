import { Module } from '@nestjs/common';
import { ManualReparacionesService } from './manual-reparaciones.service';
import { ManualReparacionesController } from './manual-reparaciones.controller';

@Module({
  controllers: [ManualReparacionesController],
  providers: [ManualReparacionesService],
})
export class ManualReparacionesModule {}
