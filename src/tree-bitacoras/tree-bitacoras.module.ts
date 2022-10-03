import { Module } from '@nestjs/common';
import { TreeBitacorasService } from './tree-bitacoras.service';
import { TreeBitacorasController } from './tree-bitacoras.controller';

@Module({
  controllers: [TreeBitacorasController],
  providers: [TreeBitacorasService]
})
export class TreeBitacorasModule {}
