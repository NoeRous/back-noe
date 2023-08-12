import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Commission } from "../commission/commission.entity"
import { AnnouncementInstitutionPosition } from "../announcement_institution_position/announcement_institution_position.entity"

@Entity({ schema: 'public', name: 'commission_assigned'})
export class CommissionAssigned {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    act_init_date: Date

    @Column({nullable: true})
    act_end_date: Date


    @ManyToOne(() => Commission, (Commission) => Commission,{nullable:false})
    @JoinColumn({name: 'commission_id'})
    commission: Commission

    @ManyToOne(() => AnnouncementInstitutionPosition, (AnnouncementInstitutionPosition) => AnnouncementInstitutionPosition,{nullable:false})
    @JoinColumn({name: 'announcement_institution_position_id'})
    announcementInstitutionPosition: AnnouncementInstitutionPosition

    //columnas para auditoria
    @CreateDateColumn()
    created_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    created_by: number

    @UpdateDateColumn({ nullable: true, select: false })
    updated_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    deleted_by: number
}