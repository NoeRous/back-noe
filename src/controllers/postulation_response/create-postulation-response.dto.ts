import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from "class-validator"


class PostulationResponses {
    @IsNumber()
    test_group_question_id: number;
  
    @IsNumber()
    question_response_id: number;
  
    @IsNumber()
    response_time: number;
  }
  
  export class CreatePostulationResponseDto {
    @IsNotEmpty()
    postulation_id:number
    @ValidateNested()
    @IsNotEmpty()
    postulation_responses: PostulationResponses[];
  }