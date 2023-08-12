import { Module } from '@nestjs/common';
import { PostulationResponseController } from 'src/controllers/postulation_response/postulation_response.controller';
import { DatabaseModule } from 'src/database/database.module';
import { applicantProviders } from 'src/services/applicant/applicant.providers';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { postulationProviders } from 'src/services/postulation/postulation.providers';
import { PostulationService } from 'src/services/postulation/postulation.service';
import { postulationResponseProviders } from 'src/services/postulation_response/postulation_response.providers';
import { PostulationResponseService } from 'src/services/postulation_response/postulation_response.service';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { announcementInstitutionPositionProviders } from 'src/services/announcement_institution_position/announcement_institution_position.providers';
import { InstitutionPositionService } from 'src/services/institution_position/institution_position.service';
import { InstitutionPositionProviders } from 'src/services/institution_position/institution_position.providers';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.providers';
import { PersonService } from 'src/services/person/person.service';
import { personProviders } from 'src/services/person/person.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { announcementProviders } from 'src/services/announcement/announcement.providers';
import { PostulationTestService } from 'src/services/postulation_test/postulation_test.service';
import { postulationTestProviders } from 'src/services/postulation_test/postulation_test.providers';
import { PostulationQuestionService } from 'src/services/postulation_question/postulation_question.service';
import { postulationQuestionProviders } from 'src/services/postulation_question/postulation_question.providers';
import { QuestionResponseService } from 'src/services/question_response/question_response.service';
import { questionResponseProviders } from 'src/services/question_response/question_response.providers';
import { QuestionService } from 'src/services/question/question.service';
import { questionProviders } from 'src/services/question/question.providers';
import { QuestionCategoryService } from 'src/services/question_category/question_category.service';
import { questionCategoryProviders } from 'src/services/question_category/question_category.providers';
import { TestService } from 'src/services/test/test.service';
import { testProviders } from 'src/services/test/test.providers';
import { PositionService } from 'src/services/position/position.service';
import { positionProviders } from 'src/services/position/position.providers';
import { TestGroupService } from 'src/services/test_group/test_group.service';
import { testGroupProviders } from 'src/services/test_group/test.providers';
import { testGroupQuestionProviders } from 'src/services/test_group_question/test_group_question.providers';
import { TestGroupQuestionService } from 'src/services/test_group_question/test_group_question.service';
import { PhaseService } from 'src/services/phase/phase.service';
import { PostulationStateService } from 'src/services/postulation_state/postulation_state.service';
import { phaseProviders } from 'src/services/phase/phase.providers';
import { postulationStateProviders } from 'src/services/postulation_state/postulation_state.providers';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';
import { PhaseSequenceService } from 'src/services/phase_sequence/phase_sequence.service';
import { phaseSequenceProviders } from 'src/services/phase_sequence/phase_sequence.providers';
import { PostulationPhaseService } from 'src/services/postulation_phase/postulation_phase.service';
import { postulationPhaseProviders } from 'src/services/postulation_phase/postulation_phase.providers';
import { EmployeeService } from 'src/services/employee/employee.service';
import { employeeProviders } from 'src/services/employee/employee.providers';
import { InstitutionService } from 'src/services/institution/institution.service';
import { EmployeeInstitutionService } from 'src/services/employee_institution/employee_institution.service';
import { employeeInstitutionProviders } from 'src/services/employee_institution/employee_institution.providers';
import { institutionProviders } from 'src/services/institution/institution.providers';


@Module({
    imports: [DatabaseModule],
    controllers: [PostulationResponseController],
    providers: [
        ...postulationResponseProviders,
        ...postulationProviders,
        ...applicantProviders,
        ...announcementInstitutionPositionProviders,
        ...InstitutionPositionProviders,
        ...userProviders,
        ...personProviders,
        ...announcementProviders,
        ...postulationTestProviders,
        ...postulationQuestionProviders,
        ...questionResponseProviders,
        ...questionProviders,
        ...questionCategoryProviders,
        ...testProviders,
        ...positionProviders,
        ...testGroupProviders,
        ...testGroupQuestionProviders,
        ...phaseProviders,
        ...postulationStateProviders,
        ...roleProviders,
        ...phaseSequenceProviders,
        ...postulationPhaseProviders,
        ...employeeProviders,
        ...employeeInstitutionProviders,
        ...institutionProviders,
        PostulationResponseService,
        PostulationService,
        ApplicantService,
        AnnouncementInstitutionPositionService,
        InstitutionPositionService,
        UserService,
        PersonService,
        AnnouncementService,
        PostulationTestService,
        PostulationQuestionService,
        QuestionResponseService,
        QuestionService,
        QuestionCategoryService,
        TestService,
        PositionService,
        TestGroupService,
        TestGroupQuestionService,
        PhaseService,
        PostulationStateService,
        RoleService,
        PhaseSequenceService,
        PostulationPhaseService,
        EmployeeService,
        EmployeeInstitutionService,
        InstitutionService
    ]})
export class PostulationResponseModule {}
