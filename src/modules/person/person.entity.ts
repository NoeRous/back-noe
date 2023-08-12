import { Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique, ManyToOne } from "typeorm";
import { Account } from "../account/account.entity";
import { TPartGender } from "../t_part_gender/t_part_gender.entity";
import { Applicant } from "../aplicant/aplicant.entity";
var md5 = require('md5');
import { ClassSerializerInterceptor, UseInterceptors } from "@nestjs/common";
import { Exclude, Expose, Transform } from "class-transformer";
import { Employee } from "../employee/employee.entity";
@Entity({ schema: 'public', name: 'person' })
//@Unique('my_unique_constraint', ['identity_card'])  
//@UseInterceptors(ClassSerializerInterceptor)
//@Exclude()
@Unique(['identity_card', 'identity_card_complement'])
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'int'})
    identity_card: number

    @Column({ type: 'varchar', length: 5,nullable: true })
    identity_card_complement: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    last_name: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    mothers_last_name: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    husband_last_name: string

    @Column({ type: 'varchar', length: 50 })
    firts_name: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    second_name: string

    @Column({ nullable: true })
    photo_url: string

    @Column({ type: 'varchar', length: 50 })
    email: string

    @Column({ nullable: true })
    address: string

    @Column({ nullable: true })
    phone: string

    @Column({ nullable: true })
    personal_number: string

    @Column({ nullable: true })
    birth_date: Date


    @ManyToOne(() => TPartGender, (tPartGender) => tPartGender,{nullable:false})
    @JoinColumn({name: 't_part_gender_id'})
    tPartGender: TPartGender
    
    @OneToOne(() => Applicant, (applicant) => applicant.person)
    applicant: Applicant

    @OneToOne(() => Employee, (employee) => employee.person)
    employee: Employee


    //columnas para auditoria
    @CreateDateColumn()
    created_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    created_by: number

    @UpdateDateColumn({ nullable: true, select: false })
    updated_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    updated_by: number


    @Expose()
    get image_profile(): string {
        var urlProfile = '';
        if (this.photo_url) {
            urlProfile = this.photo_url;
        } else {
            let gravatar = md5(this.email);
            // identicon, wavatar, retro, robohash
            urlProfile = `http://gravatar.com/avatar/${gravatar}?d=robohash&s=45`;
        }
        return `${urlProfile}`;
    }

    @Expose()
    get full_name(): any {
        return `${this.firts_name} ${this.second_name} ${this.last_name} ${this.mothers_last_name} ${this.husband_last_name}`;
    }

}