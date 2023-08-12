import { Module } from '@nestjs/common';
import { MenuController } from 'src/controllers/menu/menu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { menuProviders } from 'src/services/menu/menu.providers';
import { MenuService } from 'src/services/menu/menu.service';

@Module({
    imports: [DatabaseModule],
    controllers: [MenuController],
    providers: [
        ...menuProviders,
        MenuService
    ]})
export class MenuModule {}
