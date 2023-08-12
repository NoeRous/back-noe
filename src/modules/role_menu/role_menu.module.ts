import { Module } from '@nestjs/common';
import { RoleMenuController } from 'src/controllers/role_menu/role_menu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { menuProviders } from 'src/services/menu/menu.providers';
import { MenuService } from 'src/services/menu/menu.service';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';
import { roleMenuProviders } from 'src/services/role_menu/role_menu.providers';
import { RoleMenuService } from 'src/services/role_menu/role_menu.service';

@Module({
    imports: [DatabaseModule],
    controllers: [RoleMenuController],
    providers: [
        ...roleMenuProviders,
        ...roleProviders,
        ...menuProviders,
        RoleMenuService,
        RoleService,
        MenuService
    ]})
export class RoleMenuModule {}
