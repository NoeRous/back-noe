import { Module } from '@nestjs/common';
import { PositionController } from 'src/controllers/position/position.controller';
import { DatabaseModule } from 'src/database/database.module';
import { positionProviders } from 'src/services/position/position.providers';
import { PositionService } from 'src/services/position/position.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PositionController],
    providers: [
        ...positionProviders,
        PositionService
    ]})
export class PositionModule {}
