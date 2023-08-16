import { Module } from '@nestjs/common';
import { CommissionAssignedController } from 'src/controllers/commission_assigned/commission_assigned.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commissionAssignedProviders } from 'src/services/commission_assigned/commission_assigned.providers';
import { CommissionAssignedService } from 'src/services/commission_assigned/commission_assigned.service';
import { userProviders } from 'src/user/user.providers';
import { UserService } from 'src/user/user.service';
import { CommissionInternalService } from 'src/services/commission_internal/commission_internal.service';
import { commissionInternalProviders } from 'src/services/commission_internal/commission_internal.providers';
import { PhaseService } from 'src/services/phase/phase.service';
import { phaseProviders } from 'src/services/phase/phase.providers';
import { RoleService } from 'src/services/role/role.service';
import { roleProviders } from 'src/services/role/role.providers';
import { PhaseSequenceService } from 'src/services/phase_sequence/phase_sequence.service';
import { phaseSequenceProviders } from 'src/services/phase_sequence/phase_sequence.providers';
import { InstitutionService } from 'src/services/institution/institution.service';
import { institutionProviders } from 'src/services/institution/institution.providers';
import { PositionService } from 'src/services/position/position.service';
import { positionProviders } from 'src/services/position/position.providers';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { announcementInstitutionPositionProviders } from 'src/services/announcement_institution_position/announcement_institution_position.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { announcementProviders } from 'src/services/announcement/announcement.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [CommissionAssignedController],
    providers: [
        ...commissionAssignedProviders,
        ...userProviders,
        ...commissionInternalProviders,
        ...phaseProviders,
        ...roleProviders,
        ...phaseSequenceProviders,
        ...institutionProviders,
        ...positionProviders,
        ...announcementInstitutionPositionProviders,
        ...announcementProviders,
        CommissionAssignedService,
        UserService,
        CommissionInternalService,
        PhaseService,
        RoleService,
        PhaseSequenceService,
        InstitutionService,
        PositionService,
        AnnouncementInstitutionPositionService,
        AnnouncementService
    ]
})
export class CommissionAssignedModule {}
