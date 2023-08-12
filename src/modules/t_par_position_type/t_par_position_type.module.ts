import { Module } from '@nestjs/common';
import { TParPositionTypeController } from 'src/controllers/t_par_position_type/t_par_position_type.controller';
import { DatabaseModule } from 'src/database/database.module';
import { tParPositionTypeProviders } from 'src/services/t_par_position_type/t_par_position_type.providers';
import { TParPositionTypeService } from 'src/services/t_par_position_type/t_par_position_type.service';

@Module({
    imports: [DatabaseModule],
    controllers: [TParPositionTypeController],
    providers: [
        ...tParPositionTypeProviders,
        TParPositionTypeService
    ]})
export class TParPositionTypeModule {}
