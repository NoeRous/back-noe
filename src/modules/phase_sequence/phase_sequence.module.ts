import { Module } from '@nestjs/common';
import { PhaseSequenceController } from 'src/controllers/phase_sequence/phase_sequence.controller';
import { DatabaseModule } from 'src/database/database.module';
import { phaseSequenceProviders } from 'src/services/phase_sequence/phase_sequence.providers';
import { PhaseSequenceService } from 'src/services/phase_sequence/phase_sequence.service';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PhaseSequenceController],
    providers: [
        ...phaseSequenceProviders,
        PhaseSequenceService,
    ]})
export class PhaseSequenceModule {}
