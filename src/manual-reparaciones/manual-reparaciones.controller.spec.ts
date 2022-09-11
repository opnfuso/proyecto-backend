import { Test, TestingModule } from '@nestjs/testing';
import { ManualReparacionesController } from './manual-reparaciones.controller';
import { ManualReparacionesService } from './manual-reparaciones.service';

describe('ManualReparacionesController', () => {
  let controller: ManualReparacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManualReparacionesController],
      providers: [ManualReparacionesService],
    }).compile();

    controller = module.get<ManualReparacionesController>(
      ManualReparacionesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
