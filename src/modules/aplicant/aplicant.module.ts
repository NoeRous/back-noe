import { Module } from '@nestjs/common';
import { ApplicantController } from 'src/controllers/applicant/applicant.controller';
import { DatabaseModule } from 'src/database/database.module';
import { applicantProviders } from 'src/services/applicant/applicant.providers'
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { PersonService } from 'src/services/person/person.service';
import { PersonModule } from '../person/person.module';
import { personProviders } from 'src/services/person/person.providers';

@Module({
    imports: [DatabaseModule,ApplicantModule],
    controllers: [ApplicantController],
    providers: [
        ...applicantProviders,
        ...personProviders,
        ApplicantService,
        PersonService
    ]
})
export class ApplicantModule {}
