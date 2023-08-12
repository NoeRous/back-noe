import { Module } from '@nestjs/common';
import { CommissionExternalController } from 'src/controllers/commission_external/commission_external.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commissionProviders } from 'src/services/commission/commission.providers';
import { CommissionService } from 'src/services/commission/commission.service';
import { commissionExternalProviders } from 'src/services/commission_external/commission_esternal.providers';
import { CommissionExternalService } from 'src/services/commission_external/commission_external.service';
import { representativeProviders } from 'src/services/representative/representative.providers';
import { RepresentativeService } from 'src/services/representative/representative.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CommissionExternalController],
    providers: [
        ...commissionExternalProviders,
        ...representativeProviders,
        ...commissionProviders,
        CommissionExternalService,
        RepresentativeService,
        CommissionService
    ]
})
export class CommissionExternalModule {}
