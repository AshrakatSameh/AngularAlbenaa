import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ConstructionFoundComponent } from './components/construction-found/construction-found.component';
// import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';
import { NewsComponent } from './components/news/news.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/InterConstructionCentre/internProgram/result/result.component';
import { LongTermComponent } from './components/InterConstructionCentre/internProgram/long-term/long-term.component';
import { JournalistComponent } from './components/InterConstructionCentre/internProgram/long-term/journalist/journalist.component';
import { TourismComponent } from './components/InterConstructionCentre/internProgram/long-term/tourism/tourism.component';
import { MapsComponent } from './components/InterConstructionCentre/internProgram/long-term/maps/maps.component';
import { ComputersComponent } from './components/InterConstructionCentre/internProgram/long-term/computers/computers.component';
import { LanguagesComponent } from './components/InterConstructionCentre/internProgram/long-term/languages/languages.component';
import { MangmentComponent } from './components/InterConstructionCentre/internProgram/long-term/mangment/mangment.component';
import { NursingComponent } from './components/InterConstructionCentre/internProgram/long-term/nursing/nursing.component';
import { BuildingInstituteComponent } from './components/building-institute/building-institute.component';
import { VisionComponent } from './components/building-institute/vision/vision.component';
import { AdditionsComponent } from './components/building-institute/additions/additions.component';
// import { ApplyComponent } from './components/InterConstructionCentre/internProgram/apply/ApplyComponent';
import { EnrollComponent } from './components/InterConstructionCentre/Courses/enroll/enroll.component';
import { EnquiryComponent } from './components/InterConstructionCentre/Courses/enquiry/enquiry.component';
import { ProblemInternComponent } from './components/InterConstructionCentre/internProgram/problem-intern/problem-intern.component';
import { ApplyMemComponent } from './components/membership/apply-mem/apply-mem.component';
import { GuidMemComponent } from './components/membership/guid-mem/guid-mem.component';
import { AboutCourseComponent } from './components/InterConstructionCentre/Courses/about-course/about-course.component';
import { Max3Component } from './components/InterConstructionCentre/Courses/about-course/max3/max3.component';
import { SpaceComponent } from './components/InterConstructionCentre/Courses/about-course/space/space.component';
import { AutocadComponent } from './components/InterConstructionCentre/Courses/about-course/autocad/autocad.component';
import { TechnicalComponent } from './components/InterConstructionCentre/Courses/about-course/technical/technical.component';
import { GISComponent } from './components/InterConstructionCentre/Courses/about-course/gis/gis.component';
import { RevitComponent } from './components/InterConstructionCentre/Courses/about-course/revit/revit.component';
import { ElectricComponent } from './components/InterConstructionCentre/Courses/about-course/electric/electric.component';
import { GraphicComponent } from './components/InterConstructionCentre/Courses/about-course/graphic/graphic.component';
import { QuantityComponent } from './components/InterConstructionCentre/Courses/about-course/quantity/quantity.component';
import { SiteEngineerComponent } from './components/InterConstructionCentre/Courses/about-course/site-engineer/site-engineer.component';
import { SummerTraningComponent } from './components/InterConstructionCentre/Courses/about-course/summer-traning/summer-traning.component';
import { HtmlComponent } from './components/InterConstructionCentre/Courses/about-course/html/html.component';
import { ScratchComponent } from './components/InterConstructionCentre/Courses/about-course/scratch/scratch.component';
import { ControlPannelComponent } from './components/admin/controller/control-pannel/control-pannel.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/admin/controller/dashboard/dashboard.component';
import { IcdlComponent } from './components/InterConstructionCentre/Courses/about-course/icdl/icdl.component';
import { AidComponent } from './components/InterConstructionCentre/Courses/about-course/aid/aid.component';
import { SpaceDiplomaComponent } from './components/InterConstructionCentre/Courses/about-course/space-diploma/space-diploma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule , HttpClient} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ProblemsComponent } from './components/InterConstructionCentre/Courses/problems/problems.component';
import { ApplyJobComponent } from './components/jobs/apply-job/apply-job.component';
import { ApplyTrainingComponent } from './components/InterConstructionCentre/internProgram/apply/apply.component';
import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    JobsComponent,
    RegistrationComponent,
    ConstructionFoundComponent,
    // EnrollmentComponent,
    NewsComponent,
    MagazineComponent,
    MainComponent,
    ResultComponent,
    LongTermComponent,
    JournalistComponent,
    TourismComponent,
    MapsComponent,
    ComputersComponent,
    LanguagesComponent,
    MangmentComponent,
    NursingComponent,
    RegistrationComponent,
    LogInComponent,
    BuildingInstituteComponent,
    VisionComponent,
    AdditionsComponent,
    EnrollComponent,
    EnquiryComponent,
    ProblemInternComponent,
    ApplyMemComponent,
    GuidMemComponent,
    AboutCourseComponent,
    Max3Component,
    SpaceComponent,
    AutocadComponent,
    TechnicalComponent,
    GISComponent,
    RevitComponent,
    ElectricComponent,
    GraphicComponent,
    QuantityComponent,
    SiteEngineerComponent,
    SummerTraningComponent,
    HtmlComponent,
    ScratchComponent,
    ControlPannelComponent,
    DashboardComponent,
    IcdlComponent,
    AidComponent,
    SpaceDiplomaComponent,
    RegistrationComponent,
    LogInComponent,
    BuildingInstituteComponent,
    VisionComponent,
    AdditionsComponent,
    EnrollComponent,
    EnquiryComponent,
    ProblemInternComponent,
    ApplyMemComponent,
    GuidMemComponent,
    DashBoardComponent,
    ProblemsComponent,
    ApplyJobComponent,
    AppComponent,
    ApplyTrainingComponent,
    EnrollmentComponent,
    CertificatesComponent
    
    
    

    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
 


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}