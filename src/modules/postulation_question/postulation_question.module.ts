import { Module } from '@nestjs/common';
import { PostulationQuestionController } from 'src/controllers/postulation_question/postulation_question.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postulationQuestionProviders } from 'src/services/postulation_question/postulation_question.providers';
import { PostulationQuestionService } from 'src/services/postulation_question/postulation_question.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostulationQuestionController],
    providers: [
        ...postulationQuestionProviders,
        PostulationQuestionService
    ]})
export class PostulationQuestionModule {}
