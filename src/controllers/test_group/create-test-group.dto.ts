import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateTestGroupDto{

    @ApiProperty({ example: 'Conomimientos generales' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: 'Conomimientos generales des  ...' })
    @IsNotEmpty()
    description: string

    @ApiProperty({ example: 2 })
    @IsNotEmpty()
    num_questions: number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    points_per_question:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    sequence:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    test_id: number

    @Optional()
    created_by:number


}