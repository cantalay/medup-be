import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientVisitService } from './patient-visit.service';
import { CreatePatientVisitDto } from './dto/create-patient-visit.dto';
import { UpdatePatientVisitDto } from './dto/update-patient-visit.dto';

@Controller('patient-visit')
export class PatientVisitController {
  constructor(private readonly patientVisitService: PatientVisitService) {}

  @Post()
  create(@Body() createPatientVisitDto: CreatePatientVisitDto) {
    return this.patientVisitService.create(createPatientVisitDto);
  }

  @Get()
  findAll() {
    return this.patientVisitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientVisitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientVisitDto: UpdatePatientVisitDto) {
    return this.patientVisitService.update(+id, updatePatientVisitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientVisitService.remove(+id);
  }
}
