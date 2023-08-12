import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserRolDto } from 'src/controllers/user_role/create-user_role.dto';
import { UpdateUserRolDto } from 'src/controllers/user_role/update-user_role.dto';

import { Role } from 'src/modules/role/role.entity';
import { UserRole } from 'src/modules/user_role/user_role.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleService {

    constructor(
        @Inject('USER_ROLE_REPOSITORY')
        private UserRoleRepository: Repository<UserRole>,
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ){}

    async createRolApplicant(user:User): Promise<UserRole> {
        const role: Role = await this.roleRepository.findOneBy({name:'POSTULANTE'}) 
        const userRoleNew = new UserRole();
        userRoleNew.user = user;
        userRoleNew.role = role;

        return this.UserRoleRepository.save(userRoleNew);
    }


    async create(createUserRolDto:CreateUserRolDto): Promise<UserRole> {
        const role: Role = await this.roleRepository.findOneBy({id:createUserRolDto.roleId})
        const user: User = await this.userRepository.findOneBy({id:createUserRolDto.userId}) 
        const userRoleNew = new UserRole();
        userRoleNew.user = user;
        userRoleNew.role = role;

        return this.UserRoleRepository.save(userRoleNew);
    }


    async updateById(id: number, updateData: Partial<UpdateUserRolDto>): Promise<UserRole> {
        const userRole = await this.UserRoleRepository.findOne({where: {id:id}});
        if (!userRole) {
            throw new NotFoundException('UserRole not found');
        }
        const role: Role = await this.roleRepository.findOneBy({id:updateData.role_id}) 
        userRole.role =role ;
        const updatedQuestion = await this.UserRoleRepository.save(userRole);
        return updatedQuestion;
    }


}
