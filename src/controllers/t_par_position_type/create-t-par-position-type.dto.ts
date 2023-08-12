import { IsNotEmpty } from "class-validator";

export class CreateTParPositionTypeDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
}