import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TagsComponent } from './components/dashboard/tags/tags.component';
import { ManageTComponent } from './components/dashboard/tags/manage-t/manage-t.component';
import { LocationComponent } from './components/dashboard/locations/location.component';
import { LecturersComponent } from './components/dashboard/lecturers/lecturers.component';
import { AddLecComponent } from './components/dashboard/lecturers/add-lec/add-lec.component';
import { ManageLecComponent } from './components/dashboard/lecturers/manage-lec/manage-lec.component';
import { StudentsComponent } from './components/dashboard/students/students.component';
import { YearSemsComponent } from './components/dashboard/students/year-sems/year-sems.component';
import { ProgrammesComponent } from './components/dashboard/students/programmes/programmes.component';
import { GroupsComponent } from './components/dashboard/students/groups/groups.component';
import { SubGroupsComponent } from './components/dashboard/students/sub-groups/sub-groups.component';
import { GenerateBComponent } from './components/dashboard/students/generate-b/generate-b.component';
import { SubjectsComponent } from './components/dashboard/subjects/subjects.component';
import { AddSubComponent } from './components/dashboard/subjects/add-sub/add-sub.component';
import { ManageSubComponent } from './components/dashboard/subjects/manage-sub/manage-sub.component';
import { WorksComponent } from './components/dashboard/works/works.component';
import { AddWorksComponent } from './components/dashboard/works/add-works/add-works.component';
import { ManageWorksComponent } from './components/dashboard/works/manage-works/manage-works.component';
import { UpdateWorksComponent } from './components/dashboard/works/update-works/update-works.component';
import { AddTimeSlotsComponent } from './components/dashboard/works/add-time-slots/add-time-slots.component';
import { BuildingsComponent } from './components/dashboard/locations/buildings/buildings.component';
import { RoomsComponent } from './components/dashboard/locations/rooms/rooms.component';
import { ViewBuildingComponent } from './components/dashboard/locations/buildings/view-building/view-building.component';
import { ViewRoomComponent } from './components/dashboard/locations/rooms/view-room/view-room.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { SessionsComponent } from './components/dashboard/sessions/sessions.component';
import { AddSessionComponent } from './components/dashboard/sessions/add-session/add-session.component';
import { ManageSessionsComponent } from './components/dashboard/sessions/manage-sessions/manage-sessions.component';
import { ManagerComponent } from './components/dashboard/manager/manager.component';
import { UnavailabilityComponent} from './components/dashboard/manager/unavailability/unavailability.component';
import { ConsecutiveSComponent } from './components/dashboard/manager/consecutive-s/consecutive-s.component';
import { ParallelSComponent } from './components/dashboard/manager/parallel-s/parallel-s.component';
import { NonOverlappingSComponent } from './components/dashboard/manager/non-overlapping-s/non-overlapping-s.component';
import { TimeTableComponent } from './components/dashboard/time-table/time-table.component';
import { LecturerTimetableComponent } from './components/dashboard/time-table/lecturer-timetable/lecturer-timetable.component';
import { UBatchesComponent } from './components/dashboard/manager/unavailability/u-batches/u-batches.component';
import { ULecturersComponent } from './components/dashboard/manager/unavailability/u-lecturers/u-lecturers.component';
import { USessionsComponent } from './components/dashboard/manager/unavailability/u-sessions/u-sessions.component';
import { ClassroomTimetableComponent } from './components/dashboard/time-table/classroom-timetable/classroom-timetable.component';
import { StudentbatchTimetableComponent } from './components/dashboard/time-table/studentbatch-timetable/studentbatch-timetable.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: OverviewComponent },
      {
        path: "tags",
        component: TagsComponent,
        children: [
          {
            path: "manage",
            component: ManageTComponent,
          },
        ],
      },
      {
        path: "lecturers",
        component: LecturersComponent,
        children: [
          { path: "add", component: AddLecComponent },
          { path: "manage", component: ManageLecComponent },
        ],
      },
      {
        path: "students",
        component: StudentsComponent,
        children: [
          { path: "yearsems", component: YearSemsComponent },
          { path: "programmes", component: ProgrammesComponent },
          { path: "groups", component: GroupsComponent },
          { path: "subgroups", component: SubGroupsComponent },
          { path: "generate", component: GenerateBComponent },
        ],
      },
      //set path here
      {
        path: "locations",
        component: LocationComponent,
        children: [
          { path: "buildings", component: BuildingsComponent },
          { path: "rooms", component: RoomsComponent },
          { path: "buildings/:id", component: ViewBuildingComponent },
          { path: "rooms/:id", component: ViewRoomComponent },
        ],
      },
      {
        path: "subjects",
        component: SubjectsComponent,
        children: [
          { path: "add", component: AddSubComponent },
          { path: "manage", component: ManageSubComponent },
        ],
      },
      {
        path: "works",
        component: WorksComponent,
        children: [
          { path: "add", component: AddWorksComponent },
          { path: "manage", component: ManageWorksComponent },
          { path: "edit", component: UpdateWorksComponent },
          { path: "timeslots", component: AddTimeSlotsComponent },
        ],
      },
      {
        path : 'sessions',
        component : SessionsComponent,
        children : [
          { path : 'add', component : AddSessionComponent },
          { path : 'manage', component : ManageSessionsComponent }
        ]
      },
      {
        path: 'manager',
        component: ManagerComponent,
        children: [
          { path: 'unavailability', component: UnavailabilityComponent,
            children: [
              { path: 'lecturers', component: ULecturersComponent },
              { path: 'batches', component: UBatchesComponent },
              { path: 'sessions', component: USessionsComponent }
            ] },
          { path: 'consecutives', component: ConsecutiveSComponent },
          { path: 'parallels', component: ParallelSComponent },
          { path: 'nonoverlappings', component: NonOverlappingSComponent }
        ]
      },
      {
        path: 'timetables',
        component: TimeTableComponent,
        children: [
          { path: 'lecturer', component: LecturerTimetableComponent },
          { path: 'classroom', component: ClassroomTimetableComponent },
          { path: 'batch', component: StudentbatchTimetableComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
