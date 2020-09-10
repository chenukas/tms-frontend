import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectsService } from 'app/services/subjects.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-manage-sub',
  templateUrl: './manage-sub.component.html',
  styleUrls: ['./manage-sub.component.scss']
})
export class ManageSubComponent implements OnInit {

  displayedColumns = ['subCode', 'subName', 'action'];
  dataSource : MatTableDataSource< any >;

  private _id : string;
  private year: string;
  private semester: string;
  private name: string;
  private code: string;
  private lechours: number;
  private tutehours: number;
  private labhours: number;
  private evahours: number;
  private id: string;
  private subject: [];

  constructor(
    private subjectsService: SubjectsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._id = '';
    this.name = '';
    this.code = '';
    this.viewAllSubjects();
  }

  viewAllSubjects() {
    this.subjectsService.viewSubjects().subscribe((res: APIResponse) => {
      this.dataSource = new MatTableDataSource ( res.data ); 
    })
  }

  updateSubject(id: String) {
    this.router.navigate(['/subjects/add'], {queryParams: {id} });
  }

  deleteSubject(id: String){
    this.subjectsService.deleteSubjectById(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Details are successfully deleted', null, { duration : 2000});
      this.viewAllSubjects();
      
    }, err => {
      this.snackBar.open('Details could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }
}
