import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from 'src/controllers/menu/create-menu.dto';
import { UpdateMenuDto } from 'src/controllers/menu/update-menu.dto';
import { Menu } from 'src/modules/menu/menu.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class MenuService {

    constructor(
        @Inject('MENU_REPOSITORY')
        private menuRepository: Repository<Menu>,
      
    ){}


    async findRoleAll(roleId:number): Promise<Menu[]>{
        var menus = this.menuRepository.find({
            relations:['role_menus', 'role_menus.role'], 
            where:{
                role_menus:{
                    role:{
                        id:roleId
                    }
                }
            }
        });
        
        var menusN0= (await menus).filter(x=>x.menu_id==null);
        var respMenus = [];
        (await menusN0).forEach(async menuN0 =>  {
            var sub_menus =(await menus).filter(x=>x.menu_id==menuN0.id);
            var item = {
                id:menuN0.id, 
                name:menuN0.name,
                url: (sub_menus.length!=0)?'#':menuN0.url,
                icon:menuN0.icon,
                group:menuN0.group,
                group_slug: this.slugify(menuN0.group),
                sub_menus:sub_menus
            }
            respMenus.push(item);
        });

        var groups = await this.getGroupMenu(respMenus);
        var respGroupMenus = [];
        (await groups).forEach(group => {
         var menuG = respMenus.filter(r=>r.group_slug==group.group_slug);
            respGroupMenus.push({
                group_slug:group.group_slug,
                group:group.group,
                menus: menuG
            });
            
        });
        return respMenus;
    }


   async getGroupMenu(arrayItems:any[]){
        var itemResps=[];
        (await arrayItems).forEach(element => {
        var item=  itemResps.find(x=>x.group === element.group_slug);
        if (!item) {
            itemResps.push({
                group_slug: element.group_slug,
                group:element.group 
            });
        }
       });
        return itemResps;
    }

     slugify(str) {
        return String(str)
          .normalize('NFKD') 
          .replace(/[\u0300-\u036f]/g, '') 
          .trim() 
          .toLowerCase() 
          .replace(/[^a-z0-9 -]/g, '') 
          .replace(/\s+/g, '-') 
          .replace(/-+/g, '-');
      }

    async findAll(roleId:number, menuId:number): Promise<Menu[]>{
        var whereSubMenu ={}; 
        if (menuId) {
           whereSubMenu = {menu_id: menuId};
        }else{
           whereSubMenu = {menu_id:IsNull()};
        }
        var menus = this.menuRepository.find({relations:['role_menus', 'role_menus.role'], order:{id:'DESC'}, where:whereSubMenu});
        if (roleId) {
            var respMenus =[];
            (await menus).forEach(menu => {
                var item = menu;
                var roles=   menu.role_menus.filter(x=>x.role.id == roleId);
                item.role_menus = roles;
                respMenus.push(item);
            }); 
            return respMenus;
        }else{
            return menus;
        }
    }

    findById(id:number){
        return this.menuRepository.findOneBy({id:id});
    }

    async create(data: CreateMenuDto): Promise<CreateMenuDto> {
        return this.menuRepository.save(data)
    }
  
    async updateById(id: number, updateData: Partial<UpdateMenuDto>): Promise<Menu> {
        const menu = await this.menuRepository.findOneBy({id:id});
        if (!menu) {
            throw new NotFoundException('Menu no encontrado!');
        }
        const updatedMenu = Object.assign(menu, updateData);
        return this.menuRepository.save(updatedMenu);
    }

    async deleteById(id: number): Promise<void> {
        const menu = await this.menuRepository.findOneBy({id:id});
        if (!menu) {
          throw new NotFoundException('Menu no encontrado!');
        }
        await this.menuRepository.delete(id);
    }

}
