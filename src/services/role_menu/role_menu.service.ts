import { Inject, Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateRoleMenuDto } from 'src/controllers/role_menu/create-role-menu.dto';
import { updateRoleMenuDto } from 'src/controllers/role_menu/update-role-menu.dto';
import { Menu } from 'src/modules/menu/menu.entity';
import { Role } from 'src/modules/role/role.entity';
import { RoleMenu } from 'src/modules/role_menu/role_menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleMenuService {

    constructor(
        @Inject('ROLE_MENU_REPOSITORY')
        private roleMenuRepository: Repository<RoleMenu>,
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>,
        @Inject('MENU_REPOSITORY')
        private menuRepository: Repository<Menu>,
      
    ){}

    async findAll(): Promise<RoleMenu[]>{
        return this.roleMenuRepository.find({relations:{role:true,menu:true}, order:{id:'DESC'}});
    }

    findById(id:number){
        return this.roleMenuRepository.findOne({relations:{role:true,menu:true},where:{id:id}});
    }

    async create(data: CreateRoleMenuDto): Promise<RoleMenu> {

        const role = await this.roleRepository.findOneBy({id:data.role_id});
        if (!role) {
            throw new NotFoundException('Rol no encontrado!');
        }
        const menu = await this.menuRepository.findOneBy({id:data.menu_id});
        if (!menu) {
            throw new NotFoundException('Menu no encontrado!');
        }

        const roleMenuNew = new RoleMenu();
        roleMenuNew.menu = menu
        roleMenuNew.role = role
        roleMenuNew.sequence = data.sequence
        
        return this.roleMenuRepository.save(roleMenuNew)
    }
  
    async updateById(id: number, updateData: Partial<updateRoleMenuDto>): Promise<RoleMenu> {
        const roleMenu = await this.roleMenuRepository.findOneBy({id:id});
        if (!roleMenu) {
            throw new NotFoundException('roleMenu no encontrado!');
        }

        if(updateData.menu_id){
            const menu = await this.menuRepository.findOneBy({id:updateData.menu_id});
            if (!menu) {
                throw new NotFoundException('Menu no encontrado!');
            }
            roleMenu.menu = menu
        }

        if(updateData.role_id){
            const role = await this.roleRepository.findOneBy({id:updateData.role_id});
            if (!role) {
                throw new NotFoundException('Rol no encontrado!');
            }
            roleMenu.role = role
        }

        if(updateData.sequence){
            roleMenu.sequence = updateData.sequence
        }

        return this.roleMenuRepository.save(roleMenu);
    }

    async deleteById(id: number): Promise<void> {
        const roleMenu = await this.roleMenuRepository.findOneBy({id:id});
        if (!roleMenu) {
          throw new NotFoundException('roleMenu no encontrado!');
        }
        await this.roleMenuRepository.softDelete(id);
        throw new HttpException('Se elimino el registro', HttpStatus.ACCEPTED);
    }
}
