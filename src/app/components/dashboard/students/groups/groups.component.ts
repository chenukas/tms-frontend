import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupsService } from 'app/services/groups.service';
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
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public id: string;
  public name: String;
  public isOnUpdate: boolean;

  displayedColumns = ['name','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private groupsService: GroupsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.name = '';

    this.viewAllGroups();

    this.route.queryParams.subscribe(params => {
      if(params.id) {
        this.groupsService.viewGroupById(params.id).subscribe((res: { data: any}) => {
          this.id = params.id;
          this.name = res.data.name;
          this.isOnUpdate = true;
        });
      }
    });
  }

  viewAllGroups() {
    this.groupsService.viewGroups().subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createGroup() {
    this.groupsService.createGroup(this.name).subscribe(response => {
      console.log(response);
      this.viewAllGroups();
    }, err => {
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.name = '';
  }

  updateGroup() {
    this.groupsService.updateGroupById(
      this.id,
      {
        name: this.name
      }
    ).subscribe(response => {
      console.log(response);
      this.isOnUpdate = false;
      this.router.navigate(['/students/groups']);
      this.clear();
      this.viewAllGroups();
    }, err => {
      console.log(err.message);
    });
  }

  navigateUpdateGroup(id: String) {
    this.router.navigate(['/students/groups'], {queryParams: {id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox3);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteGroup(_id);
      }
    });
  }

  deleteGroup(id: String) {
    this.groupsService.deleteGroupById(id).subscribe(response => {
      console.log(response);
      this.viewAllGroups();
    },err => {
      console.log(err.message);
    });
  }

  openSuitableRoomsComponent() {
    const ref = this.dialog.open(ManageSuitableRoomsComponent, {
      width: '50%',
      disableClose: true,
      data: {
        resource: 'groups',
        id: this.id
      }
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox3.html',
})
export class DeleteDialogBox3 {
  constructor() {}

  public deleteGroup() {}

}
