import { Module } from '@nestjs/common';
import { TParInstitutionTypeController } from 'src/controllers/t_par_institution_type/t_par_position_type.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TParInstitutionTypeProviders } from 'src/services/t_par_institution_type/t_par_institution_type.providers';
import { TParInstitutionTypeService } from 'src/services/t_par_institution_type/t_par_institution_type.service';

@Module({
    imports: [DatabaseModule],
    controllers: [TParInstitutionTypeController],
    providers: [
        ...TParInstitutionTypeProviders,
        TParInstitutionTypeService
    ]})
export class TParInstitutionTypeModule {}
