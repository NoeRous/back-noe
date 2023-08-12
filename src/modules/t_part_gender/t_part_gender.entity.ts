import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'public', name: 't_par_gender' })
export class TPartGender{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    short_name: string
}