import { Module } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { DispositivosController } from './dispositivos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DispositivosController],
  providers: [DispositivosService, PrismaService],
})
export class DispositivosModule {}
