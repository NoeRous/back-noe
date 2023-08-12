import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Phase } from "../phase/phase.entity";

@Entity({schema:'public',name:'phase_sequence'})
export class PhaseSequence{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Phase, (Phase) => Phase,{nullable:false})
    @JoinColumn({name: 'current_phase_id'})
    currentPhase: Phase

    @ManyToOne(() => Phase, (Phase) => Phase,{nullable:false})
    @JoinColumn({name: 'next_phase_id'})
    nextPhase: Phase

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'int',nullable:false})
    created_by: number
    @UpdateDateColumn({nullable:true})
    updated_at:Date
    @Column({ type:'int', nullable:true})
    updated_by: number

}