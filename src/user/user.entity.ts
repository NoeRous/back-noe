import { Person } from "src/modules/person/person.entity";
import { UserRole } from "src/modules/user_role/user_role.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    username: string;

    @Column('text')
    password: string;

    @OneToOne(() => Person, (Person) => Person,{nullable:false})
    @JoinColumn({name: 'person_id'})
    person: Person

    // @Column()
    // state:boolean;
    @OneToOne(() => UserRole, (userRole) => userRole.user)
    userRole: UserRole


    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

}