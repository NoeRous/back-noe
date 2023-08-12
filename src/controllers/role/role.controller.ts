import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { RoleService } from 'src/services/role/role.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Roles")
@Controller('role')
export class RoleController {
    constructor(private readonly _roleService: RoleService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._roleService.findAll();
    }


}
