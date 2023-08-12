import { DataSource } from "typeorm";
import { Account } from "src/modules/account/account.entity";

export const accountProviders = [
    {
        provide: 'ACCOUNT_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Account),
        inject: ['DATA_SOURCE']
    }
]