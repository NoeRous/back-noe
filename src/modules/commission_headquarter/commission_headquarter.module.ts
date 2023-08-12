import { Module } from '@nestjs/common';
import { CommissionHeadquarterController } from 'src/controllers/commission_headquarter/commission_headquarter.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commissionHeadquarterProviders } from 'src/services/commission_headquarter/commission_headquarter.providers';
import { CommissionHeadquarterService } from 'src/services/commission_headquarter/commission_headquarter.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CommissionHeadquarterController],
    providers: [
        ...commissionHeadquarterProviders,
        CommissionHeadquarterService
    ]
})
export class CommissionHeadquarterModule {}
