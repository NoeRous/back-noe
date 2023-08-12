import { Module } from '@nestjs/common';
import { CommissionAssignedController } from 'src/controllers/commission_assigned/commission_assigned.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commissionAssignedProviders } from 'src/services/commission_assigned/commission_assigned.providers';
import { CommissionAssignedService } from 'src/services/commission_assigned/commission_assigned.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CommissionAssignedController],
    providers: [
        ...commissionAssignedProviders,
        CommissionAssignedService
    ]
})
export class CommissionAssignedModule {}
