import { DataSource } from "typeorm";
import { Role } from "src/modules/role/role.entity";

export const roleProviders = [
    {
        provide: 'ROLE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Role),
        inject: ['DATA_SOURCE']
    }
]