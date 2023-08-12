import { Module } from '@nestjs/common';
import { InstitutionPositionController } from 'src/controllers/institution_position/institution_position.controller';
import { DatabaseModule } from 'src/database/database.module';
import { InstitutionPositionProviders } from 'src/services/institution_position/institution_position.providers';
import { InstitutionPositionService } from 'src/services/institution_position/institution_position.service';

@Module({
    imports: [DatabaseModule],
    controllers: [InstitutionPositionController],
    providers: [
        ...InstitutionPositionProviders,
        InstitutionPositionService,
    ]
})
export class InstitutionPositionModule {}
