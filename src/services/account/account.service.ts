import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from 'src/modules/account/account.entity';
import { CreateAccountDto } from 'src/controllers/account/create-account.dto';


@Injectable()
export class AccountService {
    constructor(
        @Inject('ACCOUNT_REPOSITORY')
        private accountRepository: Repository<Account>
    ){}

    async findAll(): Promise<Account[]>{
        return this.accountRepository.find();
    }

    create(account: CreateAccountDto): Promise<CreateAccountDto> {
        return this.accountRepository.save(account);
    }

    findAccountById(id:number){
        return this.accountRepository.findOneBy({id:id});
    }
}
