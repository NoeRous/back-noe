import { Test, TestingModule } from '@nestjs/testing';
import { AnnouncementInstitutionPositionController } from './announcement_institution_position.controller';

describe('AnnouncementInstitutionPositionController', () => {
  let controller: AnnouncementInstitutionPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnouncementInstitutionPositionController],
    }).compile();

    controller = module.get<AnnouncementInstitutionPositionController>(AnnouncementInstitutionPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
