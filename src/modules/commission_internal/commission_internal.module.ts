import { Module } from '@nestjs/common';
import { CommissionInternalController } from 'src/controllers/commission_internal/commission_internal.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commissionInternalProviders } from 'src/services/commission_internal/commission_internal.providers';
import { CommissionInternalService } from 'src/services/commission_internal/commission_internal.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CommissionInternalController],
    providers: [
        ...commissionInternalProviders,
        CommissionInternalService
    ]
})
export class CommissionInternalModule {}
