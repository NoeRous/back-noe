import { Module } from '@nestjs/common';
import { TestGroupController } from 'src/controllers/test_group/test_group.controller';
import { DatabaseModule } from 'src/database/database.module';
import { announcementProviders } from 'src/services/announcement/announcement.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { applicantProviders } from 'src/services/applicant/applicant.providers';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { positionProviders } from 'src/services/position/position.providers';
import { PositionService } from 'src/services/position/position.service';
import { postulationProviders } from 'src/services/postulation/postulation.providers';
import { PostulationService } from 'src/services/postulation/postulation.service';
import { questionProviders } from 'src/services/question/question.providers';
import { QuestionService } from 'src/services/question/question.service';
import { questionCategoryProviders } from 'src/services/question_category/question_category.providers';
import { QuestionCategoryService } from 'src/services/question_category/question_category.service';
import { testProviders } from 'src/services/test/test.providers';
import { TestService } from 'src/services/test/test.service';
import { testGroupProviders } from 'src/services/test_group/test.providers';
import { TestGroupService } from 'src/services/test_group/test_group.service';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { announcementInstitutionPositionProviders } from 'src/services/announcement_institution_position/announcement_institution_position.providers';
import { InstitutionPositionService } from 'src/services/institution_position/institution_position.service';
import { InstitutionPositionProviders } from 'src/services/institution_position/institution_position.providers';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.providers';
import { PersonService } from 'src/services/person/person.service';
import { personProviders } from 'src/services/person/person.providers';
import { PostulationTestService } from 'src/services/postulation_test/postulation_test.service';
import { postulationTestProviders } from 'src/services/postulation_test/postulation_test.providers';
import { TestGroupQuestionService } from 'src/services/test_group_question/test_group_question.service';
import { testGroupQuestionProviders } from 'src/services/test_group_question/test_group_question.providers';
import { PostulationQuestionService } from 'src/services/postulation_question/postulation_question.service';
import { postulationQuestionProviders } from 'src/services/postulation_question/postulation_question.providers';
import { QuestionResponseService } from 'src/services/question_response/question_response.service';
import { questionResponseProviders } from 'src/services/question_response/question_response.providers';
import { PhaseService } from 'src/services/phase/phase.service';
import { phaseProviders } from 'src/services/phase/phase.providers';
import { PostulationStateService } from 'src/services/postulation_state/postulation_state.service';
import { postulationStateProviders } from 'src/services/postulation_state/postulation_state.providers';
import { RoleService } from 'src/services/role/role.service';
import { roleProviders } from 'src/services/role/role.providers';
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
    controllers: [TestGroupController],
    providers: [
        ...testGroupProviders,
        ...testProviders,
        ...announcementProviders,
        ...positionProviders,
        ...questionProviders,
        ...questionCategoryProviders,
        ...postulationProviders,
        ...applicantProviders,
        ...announcementInstitutionPositionProviders,
        ...InstitutionPositionProviders,
        ...userProviders,
        ...personProviders,
        ...postulationProviders,
        ...postulationTestProviders,
        ...testGroupQuestionProviders,
        ...postulationQuestionProviders,
        ...questionResponseProviders,
        ...phaseProviders,
        ...postulationStateProviders,
        ...roleProviders,
        ...phaseSequenceProviders,
        ...postulationPhaseProviders,
        ...employeeProviders,
        ...employeeInstitutionProviders,
        ...institutionProviders,
        TestGroupService,
        TestService,
        AnnouncementService,
        PositionService,
        QuestionService,
        QuestionCategoryService,
        PostulationService,
        ApplicantService,
        AnnouncementInstitutionPositionService,
        InstitutionPositionService,
        UserService,
        PersonService,
        PostulationService,
        PostulationTestService,
        TestGroupQuestionService,
        PostulationQuestionService,
        QuestionResponseService,
        PhaseService,
        PostulationStateService,
        RoleService,
        PhaseSequenceService,
        PostulationPhaseService,
        EmployeeService,
        EmployeeInstitutionService,
        InstitutionService
    ]})
export class TestGroupModule {}
