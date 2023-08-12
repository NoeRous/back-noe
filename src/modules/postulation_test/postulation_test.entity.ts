import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Postulation } from "../postulation/postulation.entity";
import { Test } from "../test/test.entity";
import { truncate } from "fs/promises";

@Entity({schema:'public',name:'postulation_test'})
export class PostulationTest{

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true, default:0})
    total_score: number

    @Column({nullable:true})
    test_time:number

    @Column({ type: 'timestamp',nullable:false})
    date_time_init:Date

    @Column({type: 'timestamp',nullable:true})
    date_time_end:Date

    @Column({nullable:true})
    mac:string

    @Column({nullable:true})
    ip:string

    @ManyToOne(() => Postulation, (Postulation) => Postulation,{nullable:false})
    @JoinColumn({name: 'postulation_id'})
    postulation: Postulation

    @ManyToOne(() => Test, (Test) => Test,{nullable:false})
    @JoinColumn({name: 'test_id'})
    test: Test

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false,nullable:true})
    created_by: number
    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    updated_by: number
}