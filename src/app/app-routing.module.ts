import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TagsComponent } from './components/dashboard/tags/tags.component';
import { ManageTComponent } from './components/dashboard/tags/manage-t/manage-t.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      { path: 'tags',
        component: TagsComponent,
        children: [
          {
            path: 'manage', component: ManageTComponent
          }
        ]
      },
      //set path here
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
