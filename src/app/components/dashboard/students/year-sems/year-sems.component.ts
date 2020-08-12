import { Component, OnInit, ViewChild } from '@angular/core';
import { YearSemsService } from 'app/services/year-sems.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-year-sems',
  templateUrl: './year-sems.component.html',
  styleUrls: ['./year-sems.component.scss']
})
export class YearSemsComponent implements OnInit {

  public id: string;
  public name: String;
  public isOnUpdate: boolean;

  displayedColumns = ['name','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private yearSemsService: YearSemsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.name = '';

    this.viewAllYearSems();

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.yearSemsService.viewYearSemById(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.name = res.data.name;
          this.isOnUpdate = true;
        });
      }
    });
  }
  
  viewAllYearSems() {
    this.yearSemsService.viewYearSems().subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createYearSem() {
    this.yearSemsService.createYearSem(this.name).subscribe(response => {
      console.log(response);
      this.viewAllYearSems();
    }, err => {
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.name = '';
  }

  updateYearSem() {
    this.yearSemsService.updateYearSemById(
      this.id,
      {
        name: this.name
      }
    ).subscribe(response => {
      console.log(response);
      this.isOnUpdate = false;
      this.router.navigate(['/students/yearsems']);
      this.clear();
      this.viewAllYearSems();
    }, err => {
      console.log(err.message);
    });
  }

  navigateUpdateYearSem(id: String) {
    this.router.navigate(['/students/yearsems'], {queryParams: {id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox2);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteYearSem(_id);
      }
    });
  }

  deleteYearSem(id: String) {
    this.yearSemsService.deleteYearSemById(id).subscribe(response => {
      console.log(response);
      this.viewAllYearSems();
    }, err => {
      console.log(err.message);
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox2.html',
})
export class DeleteDialogBox2 {
  constructor() {}

  public deleteYearSem() {}

}