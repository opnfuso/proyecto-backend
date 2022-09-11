import { Test, TestingModule } from '@nestjs/testing';
import { ManualReparacionesService } from './manual-reparaciones.service';

describe('ManualReparacionesService', () => {
  let service: ManualReparacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManualReparacionesService],
    }).compile();

    service = module.get<ManualReparacionesService>(ManualReparacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
