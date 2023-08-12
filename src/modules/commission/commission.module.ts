import { Module } from '@nestjs/common';
import { CommissionController } from 'src/controllers/commission/commission.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commissionProviders } from 'src/services/commission/commission.providers';
import { CommissionService } from 'src/services/commission/commission.service';
import { commissionInternalProviders } from 'src/services/commission_internal/commission_internal.providers';
import { CommissionInternalService } from 'src/services/commission_internal/commission_internal.service';
import { userProviders } from 'src/user/user.providers';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CommissionController],
    providers: [
        ...commissionProviders,
        ...commissionInternalProviders,
        ...userProviders,
        CommissionService,
        CommissionInternalService,
        UserService
    ]
})
export class CommissionModule {}
