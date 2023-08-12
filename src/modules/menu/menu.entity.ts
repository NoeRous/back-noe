import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { RoleMenu } from "../role_menu/role_menu.entity"
@Entity({schema: 'public', name: 'menu'})
export class Menu {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column({ type:'varchar', length: 200})
    url: string

    @Column({ type:'varchar', length: 200})
    icon: string

    @Column({ type:'varchar', length: 200,nullable:true})
    label: string

 
    @Column({nullable:true})
    menu_id: number


    @Column({ type:'varchar', length: 250,nullable:true})
    group: string

    @OneToMany(() => RoleMenu, RoleMenu => RoleMenu.menu)
    role_menus: RoleMenu[];

    get sub_menus(): any {
        return [];
      }

}