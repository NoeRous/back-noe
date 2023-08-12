import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema:'public',name:'postulation_state'})
export class PostulationState{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'varchar',comment:'Nombre del estado'})
    name: string

    @Column({type:'varchar',comment:'Descripcion del estado'})
    description: string
}