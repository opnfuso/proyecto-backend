import { Test, TestingModule } from '@nestjs/testing';
import { TecnicosBitacorasController } from './tecnicos-bitacoras.controller';
import { TecnicosBitacorasService } from './tecnicos-bitacoras.service';

describe('TecnicosBitacorasController', () => {
  let controller: TecnicosBitacorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecnicosBitacorasController],
      providers: [TecnicosBitacorasService],
    }).compile();

    controller = module.get<TecnicosBitacorasController>(
      TecnicosBitacorasController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
