import { Test, TestingModule } from '@nestjs/testing';
import { TecnicosBitacorasService } from './tecnicos-bitacoras.service';

describe('TecnicosBitacorasService', () => {
  let service: TecnicosBitacorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TecnicosBitacorasService],
    }).compile();

    service = module.get<TecnicosBitacorasService>(TecnicosBitacorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
