import { Test, TestingModule } from '@nestjs/testing';
import { PatientVisitController } from './patient-visit.controller';
import { PatientVisitService } from './patient-visit.service';

describe('PatientVisitController', () => {
  let controller: PatientVisitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientVisitController],
      providers: [PatientVisitService],
    }).compile();

    controller = module.get<PatientVisitController>(PatientVisitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
