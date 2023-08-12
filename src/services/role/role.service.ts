import { Inject, Injectable } from '@nestjs/common';
import { Role } from 'src/modules/role/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {


    constructor(
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>
    ){}

    async findAll(): Promise<Role[]>{
        return this.roleRepository.find();
    }

}
