import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Test } from "../test/test.entity";
import { TestGroupQuestion } from "../test_group_question/test_group_question.entity";

@Entity({schema:'public',name:'test_group'})
export class TestGroup{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column({ type:'varchar', length: 200})
    description: string

    @Column()
    num_questions: number


    @Column()
    points_per_question:number

    @Column()
    sequence:number

    @ManyToOne(() => Test, (Test) => Test,{nullable:false})
    @JoinColumn({name: 'test_id'})
    test: Test

    @OneToMany(() => TestGroupQuestion, (TestGroupQuestion) => TestGroupQuestion.test_group)
    test_group_question: TestGroupQuestion[];

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