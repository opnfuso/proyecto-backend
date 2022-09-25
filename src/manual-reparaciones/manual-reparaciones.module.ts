import { Module } from '@nestjs/common';
import { ManualReparacionesService } from './manual-reparaciones.service';
import { ManualReparacionesController } from './manual-reparaciones.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManualReparacionesController],
  providers: [ManualReparacionesService, PrismaService],
})
export class ManualReparacionesModule {}
