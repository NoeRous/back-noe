import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PersonModule } from './modules/person/person.module';
import { AuthModule } from './auth/auth.module';
import { TPartGenderModule } from './modules/t_part_gender/t_part_gender.module';
import { ApplicantModule } from './modules/aplicant/aplicant.module';
import { AnnouncementModule } from './modules/announcement/announcement.module';
import { TParInstitutionTypeModule } from './modules/t_par_institution_type/t_par_institution_type.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { TParDepartmentModule } from './modules/t_par_department/t_par_department.module';
import { TParProvinceModule } from './modules/t_par_province/t_par_province.module';
import { TParMunicipalityModule } from './modules/t_par_municipality/t_par_municipality.module';
import { TParPositionTypeModule } from './modules/t_par_position_type/t_par_position_type.module';
import { PositionModule } from './modules/position/position.module';
import { InstitutionPositionModule } from './modules/institution_position/institution_position.module';
import { AnnouncementInstitutionPositionModule } from './modules/announcement_institution_position/announcement_institution_position.module';
import { PostulationModule } from './modules/postulation/postulation.module';
import { SpatialityModule } from './modules/spatiality/spatiality.module';
import { UtilController } from './util/util.controller';
import { QuestionCategoryModule } from './modules/question_category/question_category.module';
import { QuestionModule } from './modules/question/question.module';
import { QuestionResponseModule } from './modules/question_response/question_response.module';
import { TestModule } from './modules/test/test.module';
import { TestGroupModule } from './modules/test_group/test_group.module';
import { TestGroupQuestionModule } from './modules/test_group_question/test_group_question.module';
import { PostulationTestModule } from './modules/postulation_test/postulation_test.module';
import { PostulationQuestionModule } from './modules/postulation_question/postulation_question.module';
import { PostulationResponseModule } from './modules/postulation_response/postulation_response.module';
import { TParQuestionTypeModule } from './modules/t_par_question_type/t_par_question_type.module';
import { MenuModule } from './modules/menu/menu.module';
import { RoleMenuModule } from './modules/role_menu/role_menu.module';
import { PhaseModule } from './modules/phase/phase.module';
import { PostulationStateModule } from './modules/postulation_state/postulation_state.module';
import { PostulationPhaseModule } from './modules/postulation_phase/postulation_phase.module';
import { RolModule } from './modules/role/role.module';
import { UserRoleModule } from './modules/user_role/user_role.module';
import { PhaseSequenceModule } from './modules/phase_sequence/phase_sequence.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeInstitutionModule } from './modules/employee_institution/employee_institution.module';
import { RepresentativeModule } from './modules/representative/representative.module';
import { CommissionHeadquarterModule } from './modules/commission_headquarter/commission_headquarter.module';
import { CommissionModule } from './modules/commission/commission.module';
import { CommissionInternalModule } from './modules/commission_internal/commission_internal.module';
import { CommissionExternalModule } from './modules/commission_external/commission_external.module';
import { CommissionAssignedModule } from './modules/commission_assigned/commission_assigned.module';

@Module({
  imports: [
    UserModule,
    PersonModule, 
    AuthModule, 
    TPartGenderModule, 
    ApplicantModule, 
    AnnouncementModule, 
    TParInstitutionTypeModule, 
    InstitutionModule,
    TParDepartmentModule, 
    TParProvinceModule, 
    TParMunicipalityModule, 
    TParPositionTypeModule,
    PositionModule, 
    InstitutionPositionModule, 
    AnnouncementInstitutionPositionModule, 
    PostulationModule, 
    SpatialityModule, 
    QuestionCategoryModule, 
    QuestionModule, QuestionResponseModule,
    TestModule,
    TestGroupModule,
    TestGroupQuestionModule,
    PostulationTestModule,
    PostulationQuestionModule,
    PostulationResponseModule,
    TParQuestionTypeModule,
    MenuModule,
    RoleMenuModule,
    PhaseModule,
    PostulationStateModule,
    PostulationPhaseModule,
    PhaseSequenceModule,
    RolModule,
    UserRoleModule,
    EmployeeModule,
    EmployeeInstitutionModule,
    RepresentativeModule,
    CommissionHeadquarterModule,
    CommissionModule,
    CommissionInternalModule,
    CommissionExternalModule,
    CommissionAssignedModule
  ],
  controllers: [AppController, UtilController],
  providers: [AppService],
})
export class AppModule {}
