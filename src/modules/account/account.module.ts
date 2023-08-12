import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from 'src/services/account/account.providers';
import { AccountService } from 'src/services/account/account.service';
import { AccountController } from 'src/controllers/account/account.controller';
@Module({
    imports: [DatabaseModule],
    controllers: [AccountController],
    providers: [
        ...accountProviders,
        AccountService
    ]
})
export class AccountModule {}
