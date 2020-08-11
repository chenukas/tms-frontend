import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TagsComponent } from './components/dashboard/tags/tags.component';
import { ManageTComponent } from './components/dashboard/tags/manage-t/manage-t.component';
import { LocationComponent } from './components/dashboard/location/location.component';
import { AddLocationComponent } from './components/dashboard/location/add-location/add-location.component';
const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      {
        path: 'tags',
        component: TagsComponent,
        children: [
          {
            path: 'manage', component: ManageTComponent
          }
        ]
      },
      //set path here

      {
        path: 'location', component: LocationComponent,
        children: [
          { path: 'add', component: AddLocationComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
