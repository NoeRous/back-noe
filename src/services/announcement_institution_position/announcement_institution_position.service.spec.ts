import { Test, TestingModule } from '@nestjs/testing';
import { AnnouncementInstitutionPositionService } from './announcement_institution_position.service';

describe('AnnouncementInstitutionPositionService', () => {
  let service: AnnouncementInstitutionPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnouncementInstitutionPositionService],
    }).compile();

    service = module.get<AnnouncementInstitutionPositionService>(AnnouncementInstitutionPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
