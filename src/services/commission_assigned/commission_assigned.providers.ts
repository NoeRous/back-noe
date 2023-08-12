import { CommissionAssigned } from "src/modules/commission_assigned/commission_assigned.entity";
import { DataSource } from "typeorm";

export const commissionAssignedProviders = [
    {
        provide: 'COMMISSION_ASSIGNED_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(CommissionAssigned),
        inject: ['DATA_SOURCE']
    }
]