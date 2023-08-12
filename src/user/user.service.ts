import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { Person } from 'src/modules/person/person.entity';
import { UpdateUserDto } from './update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    saltOrRounds = 10;
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find({relations:['person', 'userRole.role']});
    }

    findOne(username: string): Promise<any> {
        return this.userRepository.findOne({where:{username: username}, relations:['person','userRole.role']})
    }

    findById(id: number): Promise<any> {
        return this.userRepository.findOne({where:{id: id}, relations:['person','userRole.role']})
    }

    findOneId(id: number): Promise<any> {
        return this.userRepository.findOne({where:{id}, relations:{person:true}})
    }

    create(username: string, password:string,person: Person): Promise<CreateUserDto> {
        return this.userRepository.save({username:username,password:password,person:person})
    }

    async updateById(id: number, updateData: Partial<UpdateUserDto>): Promise<User> {
        const user = await this.userRepository.findOneBy({id:id});
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        console.log('updateData.password.length ',updateData.password.length)
        if(updateData.password.length < 2){
            console.log('updateData.password.length entrooo',updateData.password.length)

            throw new NotFoundException('la contraseña debe tener almenos 2 caracteres');
        }
        const hash = await bcrypt.hash(updateData.password, this.saltOrRounds)
        user.password = hash

        return this.userRepository.save(user);
    }
}
