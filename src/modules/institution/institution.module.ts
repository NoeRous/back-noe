import { Module } from '@nestjs/common';
import { InstitutionController } from 'src/controllers/institution/institution.controller';
import { DatabaseModule } from 'src/database/database.module';
import { institutionProviders } from 'src/services/institution/institution.providers';
import { InstitutionService } from 'src/services/institution/institution.service';

@Module({
    imports: [DatabaseModule],
    controllers: [InstitutionController],
    providers: [
        ...institutionProviders,
        InstitutionService,
    ]
})
export class InstitutionModule {}
