import "reflect-metadata";
import "../polyfills";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material/material.module";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OverviewComponent } from "./components/dashboard/overview/overview.component";
import { LocationComponent } from "./components/dashboard/locations/location.component";
import { StudentsComponent } from "./components/dashboard/students/students.component";
import { TagsComponent } from "./components/dashboard/tags/tags.component";
import {
  ManageTComponent,
  DeleteDialogBox,
} from "./components/dashboard/tags/manage-t/manage-t.component";
import { LecturersComponent } from "./components/dashboard/lecturers/lecturers.component";
import { AddLecComponent } from "./components/dashboard/lecturers/add-lec/add-lec.component";
import { ManageLecComponent } from "./components/dashboard/lecturers/manage-lec/manage-lec.component";
import {
  YearSemsComponent,
  DeleteDialogBox2,
} from "./components/dashboard/students/year-sems/year-sems.component";
import {
  ProgrammesComponent,
  DeleteDialogBox1,
} from "./components/dashboard/students/programmes/programmes.component";
import {
  GroupsComponent,
  DeleteDialogBox3,
} from "./components/dashboard/students/groups/groups.component";
import {
  GenerateBComponent,
  DeleteDialogBox5,
} from "./components/dashboard/students/generate-b/generate-b.component";
import {
  SubGroupsComponent,
  DeleteDialogBox4,
} from "./components/dashboard/students/sub-groups/sub-groups.component";
import { SubjectsComponent } from "./components/dashboard/subjects/subjects.component";
import { AddSubComponent } from "./components/dashboard/subjects/add-sub/add-sub.component";
import { ManageSubComponent } from "./components/dashboard/subjects/manage-sub/manage-sub.component";
import { WorksComponent } from "./components/dashboard/works/works.component";
import { AddWorksComponent } from "./components/dashboard/works/add-works/add-works.component";
import {
  ManageWorksComponent,
  DeleteDialogBox6,
} from "./components/dashboard/works/manage-works/manage-works.component";
//import { ViewLocationsComponent } from './components/dashboard/locations/view-locations/view-locations.component';
import { UpdateWorksComponent } from './components/dashboard/works/update-works/update-works.component';
import { AddTimeSlotsComponent } from './components/dashboard/works/add-time-slots/add-time-slots.component';
import { BuildingsComponent } from './components/dashboard/locations/buildings/buildings.component';
import { RoomsComponent } from './components/dashboard/locations/rooms/rooms.component';
import { AddNewBuildingComponent } from './components/dashboard/locations/buildings/add-new-building/add-new-building.component';
import { ViewBuildingComponent } from './components/dashboard/locations/buildings/view-building/view-building.component';
import { AddNewRoomComponent } from './components/dashboard/locations/rooms/add-new-room/add-new-room.component';
import { ViewRoomComponent } from './components/dashboard/locations/rooms/view-room/view-room.component';
import { SessionsComponent } from './components/dashboard/sessions/sessions.component';
import { AddSessionComponent } from './components/dashboard/sessions/add-session/add-session.component';
import { ManageSessionsComponent } from './components/dashboard/sessions/manage-sessions/manage-sessions.component';
import { ManagerComponent } from './components/dashboard/manager/manager.component';
import { UnavailabilityComponent } from './components/dashboard/manager/unavailability/unavailability.component';
import { ConsecutiveSComponent } from './components/dashboard/manager/consecutive-s/consecutive-s.component';
import { ParallelSComponent } from './components/dashboard/manager/parallel-s/parallel-s.component';
import { NonOverlappingSComponent } from './components/dashboard/manager/non-overlapping-s/non-overlapping-s.component';
import { TimeTableComponent } from './components/dashboard/time-table/time-table.component';
import { LecturerTimetableComponent } from './components/dashboard/time-table/lecturer-timetable/lecturer-timetable.component';
import { ULecturersComponent } from './components/dashboard/manager/unavailability/u-lecturers/u-lecturers.component';
import { UBatchesComponent } from './components/dashboard/manager/unavailability/u-batches/u-batches.component';
import { USessionsComponent } from './components/dashboard/manager/unavailability/u-sessions/u-sessions.component';
import { ClassroomTimetableComponent } from './components/dashboard/time-table/classroom-timetable/classroom-timetable.component';
import { StudentbatchTimetableComponent } from './components/dashboard/time-table/studentbatch-timetable/studentbatch-timetable.component';
import { ManagePreferredLocationsComponent } from './components/dashboard/subjects/manage-preferred-locations/manage-preferred-locations.component';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { ManageSuitableRoomsComponent } from './components/dashboard/locations/rooms/manage-suitable-rooms/manage-suitable-rooms.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  entryComponents: [
    DeleteDialogBox,
    DeleteDialogBox1,
    DeleteDialogBox2,
    DeleteDialogBox3,
    DeleteDialogBox4,
    DeleteDialogBox5,
    DeleteDialogBox6,
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
    DeleteDialogBox1,
    DeleteDialogBox2,
    DeleteDialogBox3,
    DeleteDialogBox4,
    DeleteDialogBox5,
    DeleteDialogBox6,
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
    BuildingsComponent,
    RoomsComponent,
    AddNewBuildingComponent,
    ViewBuildingComponent,
    AddNewRoomComponent,
    ViewRoomComponent,
    SessionsComponent,
    AddSessionComponent,
    ManageSessionsComponent,
    ManagerComponent,
    UnavailabilityComponent,
    ConsecutiveSComponent,
    ParallelSComponent,
    NonOverlappingSComponent,
    TimeTableComponent,
    LecturerTimetableComponent,
    ULecturersComponent,
    UBatchesComponent,
    USessionsComponent,
    ClassroomTimetableComponent,
    StudentbatchTimetableComponent,
    ManagePreferredLocationsComponent,
    ManageSuitableRoomsComponent,
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
        deps: [HttpClient],
      },
    }),
    NgxMatNativeDateModule,
    NgxMatDatetimePickerModule, 
    NgxMatTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
