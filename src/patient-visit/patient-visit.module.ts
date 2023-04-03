import { Module } from '@nestjs/common';
import { PatientVisitService } from './patient-visit.service';
import { PatientVisitController } from './patient-visit.controller';

@Module({
  controllers: [PatientVisitController],
  providers: [PatientVisitService]
})
export class PatientVisitModule {}
