import { Test, TestingModule } from '@nestjs/testing';
import { PatientVisitService } from './patient-visit.service';

describe('PatientVisitService', () => {
  let service: PatientVisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientVisitService],
    }).compile();

    service = module.get<PatientVisitService>(PatientVisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
