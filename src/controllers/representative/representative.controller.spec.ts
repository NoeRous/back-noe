import { Test, TestingModule } from '@nestjs/testing';
import { RepresentativeController } from './representative.controller';

describe('RepresentativeController', () => {
  let controller: RepresentativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepresentativeController],
    }).compile();

    controller = module.get<RepresentativeController>(RepresentativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
