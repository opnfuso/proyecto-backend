import { Test, TestingModule } from '@nestjs/testing';
import { TreeBitacorasService } from './tree-bitacoras.service';

describe('TreeBitacorasService', () => {
  let service: TreeBitacorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeBitacorasService],
    }).compile();

    service = module.get<TreeBitacorasService>(TreeBitacorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
