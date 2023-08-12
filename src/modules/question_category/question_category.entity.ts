import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Question } from "../question/question.entity";

@Entity({ schema: 'public', name: 'question_category' })
export class QuestionCategory {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column("text")
    description: string

    @OneToMany(() => Question, question => question.question_category)
    question: Question[];

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false,nullable:true})
    created_by: string
    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    updated_by: string

}