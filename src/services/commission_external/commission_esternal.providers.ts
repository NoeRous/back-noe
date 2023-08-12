import { CommissionExternal } from "src/modules/commission_external/commission_external.entity";
import { DataSource } from "typeorm";

export const commissionExternalProviders = [
    {
        provide: 'COMMISSION_EXTERNAL_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(CommissionExternal),
        inject: ['DATA_SOURCE']
    }
]