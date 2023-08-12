import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateQuestionCategoryDto{
    @ApiProperty({ example: 'HISTORIA' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'DESCRIPCION DE HISTORIA' })
    @IsNotEmpty()
    description: string;
}