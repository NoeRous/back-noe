import { Module } from '@nestjs/common';
import { RoleController } from 'src/controllers/role/role.controller';
import { DatabaseModule } from 'src/database/database.module';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';

@Module({
    imports: [DatabaseModule],
    controllers: [RoleController],
    providers: [
        ...roleProviders,

        RoleService
       
    ]})
export class RolModule {}
