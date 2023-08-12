import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "../role/role.entity"
import { Menu } from "../menu/menu.entity"
@Entity({schema:'public',name:'role_menu'})
export class RoleMenu{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'int', nullable:true})
    sequence:number

    @ManyToOne(() => Role, (Role) => Role,{nullable:false})
    @JoinColumn({name: 'role_id'})
    role:Role

    @ManyToOne(() => Menu, (Menu) => Menu,{nullable:false})
    @JoinColumn({name: 'menu_id'})
    menu:Menu

    @DeleteDateColumn()
    deleted_at: Date
    
}