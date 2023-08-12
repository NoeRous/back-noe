import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Announcement } from "../announcement/announcement.entity";
import { Position } from "../position/position.entity";
import { TestGroup } from "../test_group/test_group.entity";

@Entity({schema:'public',name:'test'})
export class Test{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column({ type:'varchar', length: 200})
    description: string

    @Column()
    total_questions: number
    
    @Column({default:true})
    is_random:boolean

    @Column()
    date_init:Date

    @Column()
    date_end: Date

    @Column()
    time: number

    @Column()
    minimum_score:number

    @Column()
    num_attemps:number

    @Column()
    questions_per_page:number

    @ManyToOne(() => Announcement, (Announcement) => Announcement,{nullable:false})
    @JoinColumn({name: 'announcement_id'})
    announcement: Announcement

    @ManyToOne(() => Position, (Position) => Position,{nullable:false})
    @JoinColumn({name: 'position_id'})
    position: Position

    @OneToMany(() => TestGroup, (TestGroup) => TestGroup.test)
    test_group: TestGroup[];

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