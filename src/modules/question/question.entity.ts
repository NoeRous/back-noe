import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { QuestionCategory } from "../question_category/question_category.entity";
import { QuestionResponse } from "../question_response/question_response.entity";
import { TestGroupQuestion } from "../test_group_question/test_group_question.entity";
import { TParQuestionType } from "../t_par_question_type/t_par_question_type.entity";
import { Expose } from "class-transformer";

@Entity({ schema: 'public', name: 'question' })
export class Question {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column({ type:'varchar', length: 200,nullable:true})
    file_url: string

    @ManyToOne(() => QuestionCategory, (QuestionCategory) => QuestionCategory,{nullable:false})
    @JoinColumn({name: 'question_category_id'})
    question_category: QuestionCategory

    @OneToMany(() => QuestionResponse, QuestionResponse => QuestionResponse.question)
    question_response: QuestionResponse[];

    @OneToMany(() => TestGroupQuestion, (TestGroupQuestion) => TestGroupQuestion.question)
    test_group_question: TestGroupQuestion[];

    @ManyToOne(() => TParQuestionType, (TParQuestionType) => TParQuestionType,{nullable:true})
    @JoinColumn({name: 't_par_question_type_id'})
    t_par_question_type: TParQuestionType

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false,nullable:false})
    created_by: number
    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

    @Expose()
    get type_form(): any {
      var  responses  = this.question_response.filter(x=>x.is_valid==true);
      if (responses.length==1) {
        return 'radio';
      } else {
        return 'check';
      }
    }

}