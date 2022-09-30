import { Test, TestingModule } from '@nestjs/testing';
import { SolucionesService } from './soluciones.service';

describe('SolucionesService', () => {
  let service: SolucionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolucionesService],
    }).compile();

    service = module.get<SolucionesService>(SolucionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
