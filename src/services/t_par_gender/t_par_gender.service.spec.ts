import { Test, TestingModule } from '@nestjs/testing';
import { TParGenderService } from './t_par_gender.service';

describe('TParGenderService', () => {
  let service: TParGenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TParGenderService],
    }).compile();

    service = module.get<TParGenderService>(TParGenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
