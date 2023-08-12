import { Module } from '@nestjs/common';
import { UserRoleController } from 'src/controllers/user_role/user_role.controller';
import { DatabaseModule } from 'src/database/database.module';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';
import { userRoleProviders } from 'src/services/user_role/user_role.providers';
import { UserRoleService } from 'src/services/user_role/user_role.service';
import { userProviders } from 'src/user/user.providers';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UserRoleController],
    providers: [
        ...userRoleProviders,
        ...roleProviders,
        ...userProviders,
        UserRoleService,
        RoleService,
        UserService
    ]})
export class UserRoleModule {}
