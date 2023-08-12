import { CommissionExternal } from "src/modules/commission_external/commission_external.entity";
import { CommissionHeadquarter } from "src/modules/commission_headquarter/commission_headquarter.entity";
import { DataSource } from "typeorm";

export const commissionHeadquarterProviders = [
    {
        provide: 'COMMISSION_HEADQUARTER_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(CommissionHeadquarter),
        inject: ['DATA_SOURCE']
    }
]