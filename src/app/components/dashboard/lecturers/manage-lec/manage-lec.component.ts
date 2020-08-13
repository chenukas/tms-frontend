import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LecturersService } from 'app/services/lecturers.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-manage-lec',
  templateUrl: './manage-lec.component.html',
  styleUrls: ['./manage-lec.component.scss']
})
export class ManageLecComponent implements OnInit {

  displayedColumns = ['lecId', 'lecRank','lecName', 'action'];
  dataSource : MatTableDataSource< any >;

  private _id: string;
  private rank: string;
  private empid: string;
  private fname: string;
  private lname: string;
  private email: string;
  private faculty: string;
  private department: string;
  private center: string;
  private building: string;
  private level: string;
  private id : string;
  private lecturers: [];

  constructor(
    private lecturersService: LecturersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._id = '';
    this.empid = '';
    this.rank = '';
    this.fname = '';
    this.lname = '';
    this.viewAllLecturers();
  }

  viewAllLecturers() {
    this.lecturersService.viewLecturers().subscribe((res : APIResponse) => {
      this.dataSource = new MatTableDataSource ( res.data );
    })
  }

  updateLecturer(id: String) {
    this.router.navigate(['/lecturers/add'], {queryParams: {id} });
  }

  deleteLecturer(id: String){
    this.lecturersService.deleteLecturerById(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Details are successfully deleted', null, { duration : 2000});
      this.viewAllLecturers();
      
    }, err => {
      this.snackBar.open('Details could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }

}
