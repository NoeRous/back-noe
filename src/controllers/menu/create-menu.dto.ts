import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateMenuDto{
   
    @ApiProperty({ example: 'postulaciones' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: '/admin/postulation' })
    @IsNotEmpty()
    url: string

    @ApiProperty({ example: 'fa-fa' })
    @IsNotEmpty()
    icon: string

    @ApiProperty({ example: 'postulation' })
  //  @IsNotEmpty()
    label: string

    @ApiProperty({ example: 1 })
    @Optional()
    menu_id: number

    @ApiProperty({ example: 'Menú prinipa' })
    @Optional()
    group: string

}