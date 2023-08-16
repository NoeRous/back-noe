import { Module } from '@nestjs/common';
import { PostulationController } from 'src/controllers/postulation/postulation.controller';
import { DatabaseModule } from 'src/database/database.module';
import { announcementProviders } from 'src/services/announcement/announcement.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { announcementInstitutionPositionProviders } from 'src/services/announcement_institution_position/announcement_institution_position.providers';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { applicantProviders } from 'src/services/applicant/applicant.providers';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { postulationProviders } from 'src/services/postulation/postulation.providers';
import { PostulationService } from 'src/services/postulation/postulation.service';
import { InstitutionPositionService } from 'src/services/institution_position/institution_position.service';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.providers';
import { PersonService } from 'src/services/person/person.service';
import { personProviders } from 'src/services/person/person.providers';
import { InstitutionPositionProviders } from 'src/services/institution_position/institution_position.providers';
import { PostulationStateService } from 'src/services/postulation_state/postulation_state.service';
import { postulationStateProviders } from 'src/services/postulation_state/postulation_state.providers';
import { PhaseService } from 'src/services/phase/phase.service';
import { phaseProviders } from 'src/services/phase/phase.providers';
import { RoleService } from 'src/services/role/role.service';
import { roleProviders } from 'src/services/role/role.providers';
import { PhaseSequenceService } from 'src/services/phase_sequence/phase_sequence.service';
import { phaseSequenceProviders } from 'src/services/phase_sequence/phase_sequence.providers';
import { PostulationPhaseService } from 'src/services/postulation_phase/postulation_phase.service';
import { postulationPhaseProviders } from 'src/services/postulation_phase/postulation_phase.providers';
import { PostulationTestService } from 'src/services/postulation_test/postulation_test.service';
import { postulationTestProviders } from 'src/services/postulation_test/postulation_test.providers';
import { TestService } from 'src/services/test/test.service';
import { testProviders } from 'src/services/test/test.providers';
import { PostulationQuestionService } from 'src/services/postulation_question/postulation_question.service';
import { postulationQuestionProviders } from 'src/services/postulation_question/postulation_question.providers';
import { PositionService } from 'src/services/position/position.service';
import { positionProviders } from 'src/services/position/position.providers';
import { QuestionService } from 'src/services/question/question.service';
import { questionProviders } from 'src/services/question/question.providers';
import { TestGroupService } from 'src/services/test_group/test_group.service';
import { testGroupProviders } from 'src/services/test_group/test.providers';
import { TestGroupQuestionService } from 'src/services/test_group_question/test_group_question.service';
import { testGroupQuestionProviders } from 'src/services/test_group_question/test_group_question.providers';
import { QuestionCategoryService } from 'src/services/question_category/question_category.service';
import { questionCategoryProviders } from 'src/services/question_category/question_category.providers';
import { EmployeeService } from 'src/services/employee/employee.service';
import { employeeProviders } from 'src/services/employee/employee.providers';
import { EmployeeInstitutionService } from 'src/services/employee_institution/employee_institution.service';
import { employeeInstitutionProviders } from 'src/services/employee_institution/employee_institution.providers';
import { InstitutionService } from 'src/services/institution/institution.service';
import { institutionProviders } from 'src/services/institution/institution.providers';
import { CommissionInternalService } from 'src/services/commission_internal/commission_internal.service';
import { commissionInternalProviders } from 'src/services/commission_internal/commission_internal.providers';
import { CommissionAssignedService } from 'src/services/commission_assigned/commission_assigned.service';
import { commissionAssignedProviders } from 'src/services/commission_assigned/commission_assigned.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [PostulationController],
    providers: [
        ...postulationProviders,
        ...announcementInstitutionPositionProviders,
        ...applicantProviders,
        ...announcementProviders,
        ...InstitutionPositionProviders,
        ...userProviders,
        ...personProviders,
        ...postulationStateProviders,
        ...phaseProviders,
        ...roleProviders,
        ...phaseSequenceProviders,
        ...postulationPhaseProviders,
        ...postulationTestProviders,
        ...testProviders,
        ...postulationQuestionProviders,
        ...positionProviders,
        ...questionProviders,
        ...testGroupProviders,
        ...testGroupQuestionProviders,
        ...questionCategoryProviders,
        ...employeeProviders,
        ...employeeInstitutionProviders,
        ...institutionProviders,
        ...commissionInternalProviders,
        ...commissionAssignedProviders,
        PostulationService,
        AnnouncementInstitutionPositionService,
        ApplicantService,
        AnnouncementService,
        InstitutionPositionService,
        UserService,
        PersonService,
        PostulationStateService,
        PhaseService,
        RoleService,
        PhaseSequenceService,
        PostulationPhaseService,
        PostulationTestService,
        TestService,
        PostulationQuestionService,
        PositionService,
        QuestionService,
        TestGroupService,
        TestGroupQuestionService,
        QuestionCategoryService,
        EmployeeService,
        EmployeeInstitutionService,
        InstitutionService,
        CommissionInternalService,
        CommissionAssignedService
    ]})
export class PostulationModule {

    
}
