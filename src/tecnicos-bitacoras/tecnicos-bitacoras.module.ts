import { Module } from '@nestjs/common';
import { TecnicosBitacorasService } from './tecnicos-bitacoras.service';
import { TecnicosBitacorasController } from './tecnicos-bitacoras.controller';

@Module({
  controllers: [TecnicosBitacorasController],
  providers: [TecnicosBitacorasService]
})
export class TecnicosBitacorasModule {}
