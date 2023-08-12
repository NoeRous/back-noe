import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TestGroup } from "../test_group/test_group.entity";
import { Question } from "../question/question.entity";

@Entity({schema:'public', name:'test_group_question'})
export class TestGroupQuestion{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => TestGroup, (TestGroup) => TestGroup,{nullable:false})
    @JoinColumn({name: 'test_group_id'})
    test_group: TestGroup

    @ManyToOne(() => Question, (Question) => Question,{nullable:false})
    @JoinColumn({name: 'question_id'})
    question: Question

      //columnas para auditoria
      @CreateDateColumn()
      created_at:Date
 
      @Column({select: false})
      created_by: number
 
      @UpdateDateColumn({nullable:true, select: false})
      updated_at:Date
 
      @Column({nullable:true, select: false})
      updated_by: number
 
      @DeleteDateColumn({nullable:true, select: false})
      deleted_at:Date
 
      @Column({nullable:true, select: false})
      deleted_by: number

}