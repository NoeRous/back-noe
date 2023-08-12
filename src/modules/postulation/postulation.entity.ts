import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Applicant } from "../aplicant/aplicant.entity"
import { AnnouncementInstitutionPosition } from "../announcement_institution_position/announcement_institution_position.entity"
import { PostulationState } from "../postulation_state/postulation_state.entity"
import { Phase } from "../phase/phase.entity"
import { User } from "src/user/user.entity"
@Entity({ schema: 'public', name: 'postulation' })
export class Postulation {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Applicant, (Applicant) => Applicant,{nullable:false})
    @JoinColumn({name: 'applicant_id'})
    applicant: Applicant

    @ManyToOne(() => AnnouncementInstitutionPosition, (AnnouncementInstitutionPosition) => AnnouncementInstitutionPosition,{nullable:false})
    @JoinColumn({name: 'announcement_institution_position_id'})
    announcementInstitutionPosition: AnnouncementInstitutionPosition

    @ManyToOne(() => PostulationState, (PostulationState) => PostulationState,{nullable:false})
    @JoinColumn({name: 'postulation_state_id'})
    postulationState: PostulationState

    @ManyToOne(() => Phase, (Phase) => Phase,{nullable:false})
    @JoinColumn({name: 'current_phase_id'})
    currentPhase: Phase

    @ManyToOne(() => User, (User) => User,{nullable:true})
    @JoinColumn({name: 'user_id'})
    user: User

    @Column({ type:'varchar', length: 200})
    voucher: string

    @Column({ type:'varchar', length: 200,nullable:false})
    voucher_url: string

    @Column({default:false})
    is_valid: Boolean


    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'int',nullable:true})//TODO arreglar en el metodo para guarde
    created_by: number
    @UpdateDateColumn({nullable:true})
    updated_at:Date
    @Column({ type:'int', nullable:true})
    updated_by: number
}