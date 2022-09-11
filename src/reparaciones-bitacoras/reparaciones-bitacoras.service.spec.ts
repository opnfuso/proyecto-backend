import { Test, TestingModule } from '@nestjs/testing';
import { ReparacionesBitacorasService } from './reparaciones-bitacoras.service';

describe('ReparacionesBitacorasService', () => {
  let service: ReparacionesBitacorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReparacionesBitacorasService],
    }).compile();

    service = module.get<ReparacionesBitacorasService>(
      ReparacionesBitacorasService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
