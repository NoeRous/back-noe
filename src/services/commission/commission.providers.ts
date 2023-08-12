import { Commission } from "src/modules/commission/commission.entity";
import { DataSource } from "typeorm";

export const commissionProviders = [
    {
        provide: 'COMMISSION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Commission),
        inject: ['DATA_SOURCE']
    }
]