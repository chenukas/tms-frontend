import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';


// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { LocationComponent } from './components/dashboard/location/location.component';
import { StudentsComponent } from './components/dashboard/students/students.component';
import { TagsComponent } from './components/dashboard/tags/tags.component';
import { ManageTComponent, DeleteDialogBox } from './components/dashboard/tags/manage-t/manage-t.component';
import { LecturersComponent } from './components/dashboard/lecturers/lecturers.component';
import { AddLocationComponent } from './components/dashboard/location/add-location/add-location.component';
import { AddLecComponent } from './components/dashboard/lecturers/add-lec/add-lec.component';
import { ManageLecComponent } from './components/dashboard/lecturers/manage-lec/manage-lec.component';
import { YearSemsComponent, DeleteDialogBox2 } from './components/dashboard/students/year-sems/year-sems.component';
import { ProgrammesComponent, DeleteDialogBox1 } from './components/dashboard/students/programmes/programmes.component';
import { GroupsComponent, DeleteDialogBox3 } from './components/dashboard/students/groups/groups.component';
import { GenerateBComponent, DeleteDialogBox5 } from './components/dashboard/students/generate-b/generate-b.component';
import { SubGroupsComponent, DeleteDialogBox4 } from './components/dashboard/students/sub-groups/sub-groups.component';
import { SubjectsComponent } from './components/dashboard/subjects/subjects.component';
import { AddSubComponent } from './components/dashboard/subjects/add-sub/add-sub.component';
import { ManageSubComponent } from './components/dashboard/subjects/manage-sub/manage-sub.component';
import { WorksComponent } from './components/dashboard/works/works.component';
import { AddWorksComponent } from './components/dashboard/works/add-works/add-works.component';
import { ManageWorksComponent } from './components/dashboard/works/manage-works/manage-works.component';
import { UpdateWorksComponent } from './components/dashboard/works/update-works/update-works.component';
import { AddTimeSlotsComponent } from './components/dashboard/works/add-time-slots/add-time-slots.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  entryComponents: [
    DeleteDialogBox,
    DeleteDialogBox1,
    DeleteDialogBox2,
    DeleteDialogBox3,
    DeleteDialogBox4,
    DeleteDialogBox5
  ],
  declarations: [
    AppComponent, 
    DashboardComponent, 
    OverviewComponent, 
    LocationComponent, 
    StudentsComponent, 
    TagsComponent, 
    ManageTComponent,
    DeleteDialogBox,
    LecturersComponent,
    AddLocationComponent,
    DeleteDialogBox1,
    DeleteDialogBox2,
    DeleteDialogBox3,
    DeleteDialogBox4,
    DeleteDialogBox5,
    LecturersComponent,
    AddLecComponent,
    ManageLecComponent,
    YearSemsComponent,
    ProgrammesComponent,
    GroupsComponent,
    GenerateBComponent,
    SubGroupsComponent,
    SubjectsComponent,
    AddSubComponent,
    ManageSubComponent,
    WorksComponent,
    AddWorksComponent,
    ManageWorksComponent,
    UpdateWorksComponent,
    AddTimeSlotsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
