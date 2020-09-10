import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LecturersService } from 'app/services/lecturers.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-add-lec',
  templateUrl: './add-lec.component.html',
  styleUrls: ['./add-lec.component.scss']
})

export class AddLecComponent implements OnInit {

  public empid: string;
  public fname: string;
  public lname: string;
  public email: string;
  public faculty: string;
  public department: string;
  public center: string;
  public building: string;
  public level: string;
  public id : string;
  public isOnUpdate : boolean;

  constructor( 
      private formBuilder: FormBuilder,
      private lecturersService: LecturersService,
      private snackbar: MatSnackBar,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  ngOnInit(): void {

    this.empid = '';
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.faculty = '';
    this.department = '';
    this.center = '';
    this.building = '';
    this.level = '';
    
    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.lecturersService.viewLecturerById(params.id).subscribe((res: {data: any}) => {
          this.id = params.id;
          this.empid = res.data.empid;
          this.fname = res.data.fname;
          this.lname = res.data.lname;
          this.email = res.data.email;
          this.faculty = res.data.faculty;
          this.department = res.data.department;
          this.center= res.data.center;
          this.building = res.data.building;
          this.level = res.data.level;
          this.isOnUpdate = true;
        });
      } 
    });
  }

  //Adding Lecturers To The System
  addLecturer() {
    this.lecturersService.addLecturer(this.empid, this.fname, this.lname, this.email, this.faculty, this.department, this.center, this.building, this.level ).subscribe(res => {
        console.log(res);
        this.snackbar.open('Added Successfully', '', {duration: 2000});
      }, err => {
        this.snackbar.open('Unsuccessful', '', { duration: 2000 });
        console.log(err.message);
      });

      this.clear();
  }

  clear() {
    this.empid = '';
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.faculty = '';
    this.department = '';
    this.center = '';
    this.building = '';
    this.level = '';
  }

  //Updating Lecturer Details
  updateLecturer(){
    this.lecturersService.updateLecturerById(
      this.id,
      {
        empid: this.empid,
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        faculty: this.faculty,
        department: this.department,
        center: this.center,
        building: this.building,
        level: this.level,
      }
    ).subscribe(res => {
      console.log(res);
      this.snackbar.open('Lecturer details are successfully updated', null, { duration : 2000});
      this.router.navigate(['/lecturers/manage']);
    }, err => {
      this.snackbar.open('Unsuccessfull', null, { duration : 2000});
      console.log(err.message);
    });
  }
}
