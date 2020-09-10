import { Component, OnInit, ViewChild } from '@angular/core';
import { YearSemsService } from 'app/services/year-sems.service';
import { ProgrammesService } from 'app/services/programmes.service';
import { GroupsService } from 'app/services/groups.service';
import { SubGroupsService } from 'app/services/sub-groups.service';
import { BatchesService } from 'app/services/batches.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-generate-b',
  templateUrl: './generate-b.component.html',
  styleUrls: ['./generate-b.component.scss']
})
export class GenerateBComponent implements OnInit {
  public yearsems: [];
  public programmes: [];
  public groups: [];
  public subgroups: [];

  public selectedYearsem: string;
  public selectedProgramme: string;
  public selectedGroup: string;
  public selectedSubgroup: string;

  public id: string;
  public name: String;
  public isOnUpdate: boolean;
  public type: String;

  displayedColumns = ['name','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private yearSemsService: YearSemsService,
    private programmesService: ProgrammesService,
    private groupsService: GroupsService,
    private subGroupsService: SubGroupsService,
    private batchesService: BatchesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.viewAllYearSems();
    this.viewAllProgrammes();
    this.viewAllGroups();
    this.viewAllSubGroups();
    this.viewAllBatches();

    this.name = '';
    this.selectedYearsem = '';
    this.selectedProgramme = '';
    this.selectedGroup = '';
    this.selectedSubgroup = '';
    this.type = '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewAllBatches() {
    this.batchesService.viewBatches().subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createBatch() {
    if( this.selectedSubgroup === '') {
      this.name = `${this.selectedYearsem}.${this.selectedProgramme}.${this.selectedGroup}`;
      this.type = 'maingroup';
    }
    else {
      this.name = `${this.selectedYearsem}.${this.selectedProgramme}.${this.selectedGroup}.${this.selectedSubgroup}`;
      this.type = 'subgroup';
    }

    if (this.selectedYearsem !== '' && this.selectedProgramme !== '' && this.selectedGroup !== '') {
      this.batchesService.createBatch(this.name, this.type).subscribe(response => {
        console.log(response);
        this.viewAllBatches();
      }, err => {
        console.log(err.message);
      });
      this.clear();
    }
  }

  clear() {
    this.name = '';
    this.selectedYearsem = '';
    this.selectedProgramme = '';
    this.selectedGroup = '';
    this.selectedSubgroup = '';
    this.type = '';
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox5);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBatch(_id);
      }
    });
  }

  deleteBatch(id: String) {
    this.batchesService.deleteBatchById(id).subscribe(response => {
      console.log(response);
      this.viewAllBatches();
    },err => {
      console.log(err.message);
    });
  }


  viewAllYearSems() {
    this.yearSemsService.viewYearSems().subscribe((res: {data: any}) => {
      this.yearsems = res.data;
    });
  }

  viewAllProgrammes() {
    this.programmesService.viewProgrammes().subscribe((res: {data: any}) => {
      this.programmes = res.data;
    });
  }

  viewAllGroups() {
    this.groupsService.viewGroups().subscribe((res: {data: any}) => {
      this.groups = res.data;
    });
  }

  viewAllSubGroups() {
    this.subGroupsService.viewSubGroups().subscribe((res: {data: any}) => {
      this.subgroups = res.data;
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox5.html',
})
export class DeleteDialogBox5 {
  constructor() {}

  public deleteBatch() {}

}