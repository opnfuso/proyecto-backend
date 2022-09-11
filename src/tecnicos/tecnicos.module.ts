import { Module } from '@nestjs/common';
import { TecnicosService } from './tecnicos.service';
import { TecnicosController } from './tecnicos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TecnicosController],
  providers: [TecnicosService, PrismaService],
})
export class TecnicosModule {}
