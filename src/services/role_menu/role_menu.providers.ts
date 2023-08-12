import { DataSource } from "typeorm";
import { RoleMenu } from "src/modules/role_menu/role_menu.entity";

export const roleMenuProviders = [
    {
        provide: 'ROLE_MENU_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(RoleMenu),
        inject: ['DATA_SOURCE']
    }
]