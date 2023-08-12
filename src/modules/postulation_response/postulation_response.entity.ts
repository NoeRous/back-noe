import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostulationQuestion } from "../postulation_question/postulation_question.entity";
import { QuestionResponse } from "../question_response/question_response.entity";
@Entity({schema:'public',name:'postulation_response'})
export class PostulationResponse{
    @PrimaryGeneratedColumn()
    id: number

    @Column({comment:'Tiempo trancurrido de respuesta'})
    response_time:number

    @ManyToOne(() => PostulationQuestion, (PostulationQuestion) => PostulationQuestion,{nullable:false})
    @JoinColumn({name: 'postulation_question_id'})
    postulation_question: PostulationQuestion

    @ManyToOne(() => QuestionResponse, (QuestionResponse) => QuestionResponse,{nullable:false})
    @JoinColumn({name: 'question_response_id'})
    question_response: QuestionResponse

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false,nullable:false})
    created_by: number
    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    updated_by: number


}