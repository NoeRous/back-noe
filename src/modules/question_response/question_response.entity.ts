import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { QuestionCategory } from "../question_category/question_category.entity";
import { Question } from "../question/question.entity";
import { Max } from "class-validator";

@Entity({ schema: 'public', name: 'question_response' })
export class QuestionResponse {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column({ type:'varchar', length: 200,nullable:true})
    file_url: string

    @Column({ type:"boolean", default:false})
    is_valid: boolean

    @Column({default:0,type:'int',nullable:false})
    percentage: number

    @ManyToOne(() => Question, (Question) => Question,{nullable:false})
    @JoinColumn({name: 'question_id'})
    question: Question

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false})
    created_by: number
    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

}