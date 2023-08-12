import { CommissionInternal } from "src/modules/commission_internal/commission_internal.entity";
import { DataSource } from "typeorm";

export const commissionInternalProviders = [
    {
        provide: 'COMMISSION_INTERNAL_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(CommissionInternal),
        inject: ['DATA_SOURCE']
    }
]