import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Announcement } from "../announcement/announcement.entity";
import { User } from "src/user/user.entity";
import { Role } from "../role/role.entity";

@Entity({schema:'public',name:'phase'})
export class Phase{
    @PrimaryGeneratedColumn()
    id: number

    @Column({comment:'nombre de la fase'})
    name:string

    @Column({comment:'Descripción de la fase'})
    description:string

    @Column({comment:'Nombre de accion de la fase',nullable:false})
    name_action:string

    @Column({comment:'Icono de la accion de la fase',nullable:false})
    icon_action:string

    @Column({comment:'fecha de inicio de la fase'})
    date_init:Date

    @Column({comment:'fecha de finalización de la fase'})
    date_end:Date

    @Column({comment:'fecha de publicación de resultados de la fase'})
    date_publication_result:Date

    @Column({type:'int',default:0, comment:'Puntaje de la fase'})
    score:number

    @Column({type:'int',default:0,comment:'Puntaje minimo de aprobación de la fase'})
    score_min_pass:number

    @Column({type:'int',comment:'Sequencia de la Fase',nullable:false})
    sequence:number

    @ManyToOne(() => Announcement, (Announcement) => Announcement,{nullable:false})
    @JoinColumn({name: 'announcement_id'})
    announcement: Announcement

    @ManyToOne(() => Role, (Role) => Role,{nullable:false})
    @JoinColumn({name: 'role_id'})
    role: Role

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date

    @Column({ type:'int',nullable:false})
    created_by: number

    @UpdateDateColumn({nullable:true})
    updated_at:Date

    @Column({ type:'int',nullable:true})
    updated_by: number


}