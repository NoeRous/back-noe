import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Person } from 'src/modules/person/person.entity';

@Injectable()
export class AuthService {

    saltOrRounds = 10;
    

    constructor(private userService: UserService, private jwtService: JwtService){}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);      
        if (!user) {
            throw new NotFoundException('Usuario no existe!');
        }
        const isMatch = await bcrypt.compare(pass, user?.password);
        if(!isMatch)
        {
            throw new NotFoundException('Contraseña incorrecta!');
            //throw new UnauthorizedException("El nombre de usuario o contraseña es incorrecto");
        }

        var rol_ ="Error";
        var roleId =0;
        try {
            rol_= user.userRole.role.name;
            roleId= user.userRole.role.id;
        } catch (error) {
            
        }

        const username_ = user.username;
        const payload = { userId: user.id, username_, rol:rol_, roleId };        
        return {
            access_token: await this.jwtService.signAsync(payload),
            username_,
            person: user.person,
            rol_,
            userId_:user.id
        }
    }


    async create(username: string, pass: string,person :Person): Promise<any> {
        const hash = await bcrypt.hash(pass, this.saltOrRounds)
        const user = await this.userService.create(username, hash,person);
        return user;
    }

}
