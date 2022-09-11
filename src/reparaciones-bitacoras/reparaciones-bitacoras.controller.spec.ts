import { Test, TestingModule } from '@nestjs/testing';
import { ReparacionesBitacorasController } from './reparaciones-bitacoras.controller';
import { ReparacionesBitacorasService } from './reparaciones-bitacoras.service';

describe('ReparacionesBitacorasController', () => {
  let controller: ReparacionesBitacorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReparacionesBitacorasController],
      providers: [ReparacionesBitacorasService],
    }).compile();

    controller = module.get<ReparacionesBitacorasController>(
      ReparacionesBitacorasController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
