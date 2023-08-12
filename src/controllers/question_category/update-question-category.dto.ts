import { ApiProperty } from "@nestjs/swagger";

export class UpdateQuestionCategoryDto{
    @ApiProperty({ example: '1111111' })
    name: string;
    @ApiProperty({ example: '1111111' })
    description: string;
}