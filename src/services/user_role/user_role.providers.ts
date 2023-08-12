import { DataSource } from "typeorm";
import { UserRole } from "src/modules/user_role/user_role.entity";

export const userRoleProviders = [
    {
        provide: 'USER_ROLE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(UserRole),
        inject: ['DATA_SOURCE']
    }
]