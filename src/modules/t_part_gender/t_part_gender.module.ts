import { Module } from '@nestjs/common';
import { TParGenderController } from 'src/controllers/t_par_gender/t_par_gender.controller';
import { DatabaseModule } from 'src/database/database.module';
import { tParGenderProviders } from 'src/services/t_par_gender/t_par_gender.providers';
import { TParGenderService } from 'src/services/t_par_gender/t_par_gender.service';

@Module({
    imports: [DatabaseModule],
    controllers: [TParGenderController],
    providers: [
        ...tParGenderProviders,
        TParGenderService
    ]})
export class TPartGenderModule {}
