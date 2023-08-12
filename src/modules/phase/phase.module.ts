import { Module } from '@nestjs/common';
import { PhaseController } from 'src/controllers/phase/phase.controller';
import { DatabaseModule } from 'src/database/database.module';
import { phaseProviders } from 'src/services/phase/phase.providers';
import { PhaseService } from 'src/services/phase/phase.service';
import { phaseSequenceProviders } from 'src/services/phase_sequence/phase_sequence.providers';
import { PhaseSequenceService } from 'src/services/phase_sequence/phase_sequence.service';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PhaseController],
    providers: [
        ...phaseProviders,
        ...roleProviders,
        ...phaseSequenceProviders,
        PhaseService,
        RoleService,
        PhaseSequenceService
    ]})
export class PhaseModule {}
