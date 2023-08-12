import { Test, TestingModule } from '@nestjs/testing';
import { TParPositionTypeService } from './t_par_position_type.service';

describe('TParPositionTypeService', () => {
  let service: TParPositionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TParPositionTypeService],
    }).compile();

    service = module.get<TParPositionTypeService>(TParPositionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
