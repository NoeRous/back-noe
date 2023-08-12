import { Module } from '@nestjs/common';
import { RepresentativeController } from 'src/controllers/representative/representative.controller';
import { DatabaseModule } from 'src/database/database.module';
import { representativeProviders } from 'src/services/representative/representative.providers';
import { RepresentativeService } from 'src/services/representative/representative.service';

@Module({
    imports: [DatabaseModule],
    controllers: [RepresentativeController],
    providers: [
        ...representativeProviders,
        RepresentativeService
    ]})
export class RepresentativeModule {}
