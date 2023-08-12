import { Module } from '@nestjs/common';
import { PostulationStateController } from 'src/controllers/postulation_state/postulation_state.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postulationStateProviders } from 'src/services/postulation_state/postulation_state.providers';
import { PostulationStateService } from 'src/services/postulation_state/postulation_state.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostulationStateController],
    providers: [
        ...postulationStateProviders,
        PostulationStateService
    ]})
export class PostulationStateModule {}
