import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostulationTest } from "../postulation_test/postulation_test.entity";
import { TestGroupQuestion } from "../test_group_question/test_group_question.entity";
import { PostulationResponse } from "../postulation_response/postulation_response.entity";

@Entity({schema:'public', name:'postulation_question'})
export class PostulationQuestion{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'int',comment:'El orden de las preguntas'})
    order:number

    @Column({default:false,comment:'si se visualizó la pregunta'})
    visualized: Boolean

    @ManyToOne(() => PostulationTest, (PostulationTest) => PostulationTest,{nullable:false})
    @JoinColumn({name: 'postulation_test_id'})
    postulation_test: PostulationTest

    @ManyToOne(() => TestGroupQuestion, (TestGroupQuestion) => TestGroupQuestion,{nullable:false})
    @JoinColumn({name: 'test_group_question_id'})
    test_group_question: TestGroupQuestion

    @OneToMany(() => PostulationResponse, PostulationResponse => PostulationResponse.postulation_question)
    postulation_response: PostulationResponse[];

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