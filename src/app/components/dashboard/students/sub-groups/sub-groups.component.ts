import { Component, OnInit, ViewChild } from '@angular/core';
import { SubGroupsService } from 'app/services/sub-groups.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { ManageSuitableRoomsComponent } from '../../locations/rooms/manage-suitable-rooms/manage-suitable-rooms.component';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-sub-groups',
  templateUrl: './sub-groups.component.html',
  styleUrls: ['./sub-groups.component.scss']
})
export class SubGroupsComponent implements OnInit {
  public id: string;
  public name: String;
  public isOnUpdate: boolean;

  displayedColumns = ['name','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private subGroupsService: SubGroupsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.name = '';

    this.viewAllSubGroups();

    this.route.queryParams.subscribe(params => {
      if(params.id) {
        this.subGroupsService.viewSubGroupById(params.id).subscribe((res: { data: any}) => {
          this.id = params.id;
          this.name = res.data.name;
          this.isOnUpdate = true;
        });
      }
    });
  }

  viewAllSubGroups() {
    this.subGroupsService.viewSubGroups().subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createSubGroup() {
    this.subGroupsService.createSubGroup(this.name).subscribe(response => {
      console.log(response);
      this.viewAllSubGroups();
    }, err => {
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.name = '';
  }

  updateSubGroup() {
    this.subGroupsService.updateSubGroupById(
      this.id,
      {
        name: this.name
      }
    ).subscribe(response => {
      console.log(response);
      this.isOnUpdate = false;
      this.router.navigate(['/students/subgroups']);
      this.clear();
      this.viewAllSubGroups();
    }, err => {
      console.log(err.message);
    });
  }

  navigateUpdateSubGroup(id: String) {
    this.router.navigate(['/students/subgroups'], {queryParams: {id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox4);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteSubGroup(_id);
      }
    });
  }

  deleteSubGroup(id: String) {
    this.subGroupsService.deleteSubGroupById(id).subscribe(response => {
      console.log(response);
      this.viewAllSubGroups();
    },err => {
      console.log(err.message);
    });
  }

  openSuitableRoomsComponent() {
    const ref = this.dialog.open(ManageSuitableRoomsComponent, {
      width: '50%',
      disableClose: true,
      data: {
        resource: 'subgroups',
        id: this.id
      }
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox4.html',
})
export class DeleteDialogBox4 {
  constructor() {}

  public deleteSubGroup() {}

}