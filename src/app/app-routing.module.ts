import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConstructionFoundComponent } from './components/construction-found/construction-found.component';

// import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';
import { HeaderComponent } from './shared/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { MainComponent } from './components/main/main.component';
import { LongTermComponent } from './components/InterConstructionCentre/internProgram/long-term/long-term.component';
import { JournalistComponent } from './components/InterConstructionCentre/internProgram/long-term/journalist/journalist.component';
import { TourismComponent } from './components/InterConstructionCentre/internProgram/long-term/tourism/tourism.component';
import { MapsComponent } from './components/InterConstructionCentre/internProgram/long-term/maps/maps.component';
import { ComputersComponent } from './components/InterConstructionCentre/internProgram/long-term/computers/computers.component';
import { LanguagesComponent } from './components/InterConstructionCentre/internProgram/long-term/languages/languages.component';
import { MangmentComponent } from './components/InterConstructionCentre/internProgram/long-term/mangment/mangment.component';
import { NursingComponent } from './components/InterConstructionCentre/internProgram/long-term/nursing/nursing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BuildingInstituteComponent } from './components/building-institute/building-institute.component';
import { VisionComponent } from './components/building-institute/vision/vision.component';
import { AdditionsComponent } from './components/building-institute/additions/additions.component';
import { EnrollComponent } from './components/InterConstructionCentre/Courses/enroll/enroll.component';
import { EnquiryComponent } from './components/InterConstructionCentre/Courses/enquiry/enquiry.component';
import { ProblemInternComponent } from './components/InterConstructionCentre/internProgram/problem-intern/problem-intern.component';
import { ProblemsComponent } from './components/InterConstructionCentre/Courses/problems/problems.component';
import { ResultComponent } from './components/InterConstructionCentre/internProgram/result/result.component';
import { ApplyMemComponent } from './components/membership/apply-mem/apply-mem.component';
import { AboutCourseComponent } from './components/InterConstructionCentre/Courses/about-course/about-course.component';
import { AutocadComponent } from './components/InterConstructionCentre/Courses/about-course/autocad/autocad.component';
import { ElectricComponent } from './components/InterConstructionCentre/Courses/about-course/electric/electric.component';
import { GISComponent } from './components/InterConstructionCentre/Courses/about-course/gis/gis.component';
import { GraphicComponent } from './components/InterConstructionCentre/Courses/about-course/graphic/graphic.component';
import { HtmlComponent } from './components/InterConstructionCentre/Courses/about-course/html/html.component';
import { Max3Component } from './components/InterConstructionCentre/Courses/about-course/max3/max3.component';
import { QuantityComponent } from './components/InterConstructionCentre/Courses/about-course/quantity/quantity.component';
import { RevitComponent } from './components/InterConstructionCentre/Courses/about-course/revit/revit.component';
import { ScratchComponent } from './components/InterConstructionCentre/Courses/about-course/scratch/scratch.component';
import { SiteEngineerComponent } from './components/InterConstructionCentre/Courses/about-course/site-engineer/site-engineer.component';
import { SpaceComponent } from './components/InterConstructionCentre/Courses/about-course/space/space.component';
import { SummerTraningComponent } from './components/InterConstructionCentre/Courses/about-course/summer-traning/summer-traning.component';
import { TechnicalComponent } from './components/InterConstructionCentre/Courses/about-course/technical/technical.component';
import { ControlPannelComponent } from './components/admin/controller/control-pannel/control-pannel.component';
import { DashboardComponent } from './components/admin/controller/dashboard/dashboard.component';
import { IcdlComponent } from './components/InterConstructionCentre/Courses/about-course/icdl/icdl.component';
import { AidComponent } from './components/InterConstructionCentre/Courses/about-course/aid/aid.component';
import { SpaceDiplomaComponent } from './components/InterConstructionCentre/Courses/about-course/space-diploma/space-diploma.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { authGuard } from './gaurds/auth.guard';
import { GuidMemComponent } from './components/membership/guid-mem/guid-mem.component';
import { ApplyJobComponent } from './components/jobs/apply-job/apply-job.component';
import {EnrollmentComponent} from './components/construction-found/enrollment/enrollment.component';
import { ApplyTrainingComponent } from './components/InterConstructionCentre/internProgram/apply/apply.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
// import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';


const routes: Routes = [

  //{path:'home',component:MainComponent},
  {path:'contact',component:ContactComponent},
  {path:'jobs',component:JobsComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'login' , component:LogInComponent},
  {path:'ConstFoundation',component:ConstructionFoundComponent},
  {path:'enroll',component:EnrollmentComponent},
  {path:'header',component:HeaderComponent},
  {path:'news',component:NewsComponent},
  {path:'magazine',component:MagazineComponent},
  {path:'longTerm',component:LongTermComponent},
  {path:'journalist',component:JournalistComponent},
  {path:'toursim',component:TourismComponent},
  {path:'map',component:MapsComponent},
  {path:'computer',component:ComputersComponent},
  {path:'language',component:LanguagesComponent},
  {path:'manage',component:MangmentComponent},
  {path:'nursing',component:NursingComponent},
  {path:'building-institute', component: BuildingInstituteComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'additions', component: AdditionsComponent},
  {path:'applyCourse',component:EnrollComponent},
  {path:'problemsCourse',component:ProblemsComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'problemIntern',component:ProblemInternComponent},
  {path:'applicant',component:ApplyTrainingComponent},
  {path:'result',component:ResultComponent},
  {path:'membershipApply',component:ApplyMemComponent},
  {path:'aboutCourse',component:AboutCourseComponent},
  {path:'autocad',component:AutocadComponent},
  {path:'electric',component:ElectricComponent},
  {path:'gis',component:GISComponent},
  {path:'graphic',component:GraphicComponent},
  {path:'html',component:HtmlComponent},
  {path:'max3',component:Max3Component},
  {path:'quantity',component:QuantityComponent},
  {path:'revit',component:RevitComponent},
  {path:'scratch',component:ScratchComponent},
  {path:'site',component:SiteEngineerComponent},
  {path:'space',component:SpaceComponent},
  {path:'summer',component:SummerTraningComponent},
  {path:'tech',component:TechnicalComponent},
  {path:'controll',component:ControlPannelComponent, canActivate: [authGuard]},
  // {path:'dash',component:DashboardComponent},
  {path:'icdl',component:IcdlComponent},
  {path:'aid',component:AidComponent},
  {path:'spaceDiploma',component:SpaceDiplomaComponent},
  {path:'guideMem',component:GuidMemComponent},
  {path:'applyJob',component:ApplyJobComponent},
  {path:'certificates',component:CertificatesComponent},
  {path: 'dashboard', component: DashBoardComponent, canActivate: [authGuard]},
  // {path: 'dashboard', component: DashBoardComponent, canActivate: [authGuard]},
  { path: 'home', component: MainComponent }, // Define the /home route
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to /home
  { path: '**', redirectTo: '/home' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



