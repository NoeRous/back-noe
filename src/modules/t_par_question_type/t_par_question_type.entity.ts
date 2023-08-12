import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema:'public', name: 't_par_question_type'})
export class TParQuestionType{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column({comment:'Representa si la pregunta es de respuestas correctas multiples'})
    is_multiple:boolean

    @Column({type:'int',comment:'Máximo de opciones de respuestas a insertar para la visualización'})
    max_options:number

}