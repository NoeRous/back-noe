import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTParPositionTypeDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}