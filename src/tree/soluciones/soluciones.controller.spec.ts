import { Test, TestingModule } from '@nestjs/testing';
import { SolucionesController } from './soluciones.controller';

describe('SolucionesController', () => {
  let controller: SolucionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolucionesController],
    }).compile();

    controller = module.get<SolucionesController>(SolucionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
