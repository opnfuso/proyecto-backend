import { Test, TestingModule } from '@nestjs/testing';
import { TreeBitacorasController } from './tree-bitacoras.controller';
import { TreeBitacorasService } from './tree-bitacoras.service';

describe('TreeBitacorasController', () => {
  let controller: TreeBitacorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreeBitacorasController],
      providers: [TreeBitacorasService],
    }).compile();

    controller = module.get<TreeBitacorasController>(TreeBitacorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
