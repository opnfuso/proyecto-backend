import { Module } from '@nestjs/common';
import { BitacorasService } from './bitacoras.service';
import { BitacorasController } from './bitacoras.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BitacorasController],
  providers: [BitacorasService, PrismaService],
})
export class BitacorasModule { }
