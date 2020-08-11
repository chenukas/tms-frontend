import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgrammesService } from 'app/services/programmes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss']
})
export class ProgrammesComponent implements OnInit {
  public id: string;
  public name: String;
  public isOnUpdate: boolean;

  displayedColumns = ['name','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private programmesService: ProgrammesService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.name = '';

    this.viewAllProgrammes();

    this.route.queryParams.subscribe(params => {
      if(params.id) {
        this.programmesService.viewProgrammeById(params.id).subscribe((res: {data: any}) => {
          this.id = params.id;
          this.name = res.data.name;
          this.isOnUpdate = true;
        });
      }
    });
  }

  viewAllProgrammes() {
    this.programmesService.viewProgrammes().subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createProgramme() {
    this.programmesService.createProgramme(this.name).subscribe(response => {
      console.log(response);
      this.viewAllProgrammes();
    }, err => {
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.name = '';
  }

  updateProgramme() {
    this.programmesService.updateProgrammeById(
      this.id,
      {
        name: this.name
      }
    ).subscribe(response => {
      console.log(response);
      this.isOnUpdate = false;
      this.router.navigate(['/students/programmes']);
      this.clear();
      this.viewAllProgrammes();
    }, err => {
      console.log(err.message);
    });
  }

  navigateUpdateProgramme(id: String) {
    this.router.navigate(['/students/programmes'], {queryParams: {id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox1);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProgramme(_id);
      }
    });
  }

  deleteProgramme(id: String) {
    this.programmesService.deleteProgrammeById(id).subscribe(response => {
      console.log(response);
      this.viewAllProgrammes();
    },err => {
      console.log(err.message);
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox1.html',
})
export class DeleteDialogBox1 {
  constructor() {}

  public deleteProgramme() {}

}