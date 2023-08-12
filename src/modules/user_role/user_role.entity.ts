import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role/role.entity";
import { User } from "src/user/user.entity";

@Entity()
export class UserRole{
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(()=>User)
    @JoinColumn({name: 'user_id'})
    user: User

    // @OneToOne(()=>Role)
    // @JoinColumn({name: 'role_id'})
    // role: Role


    @ManyToOne(() => Role, (Role) => Role,{nullable:false})
    @JoinColumn({name: 'role_id'})
    role: Role
}