import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SubjectsService } from 'app/services/subjects.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.scss']
})
export class AddSubComponent implements OnInit {

  public year: string;
  public semester: string;
  public name: string;
  public code: string;
  public lechours: number;
  public tutehours: number;
  public labhours: number;
  public evahours: number;
  public id : string;
  public isOnUpdate : boolean;

  constructor(
    private formBuilder: FormBuilder,
    private subjectsService: SubjectsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.year = '';
    this.semester = '';
    this.name = '';
    this.code = '';
    this.lechours = 0;
    this.tutehours = 0;
    this.labhours = 0;
    this.evahours = 0;

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.subjectsService.viewSubjectById(params.id).subscribe((res: {data: any}) => {
          this.id = params.id;
          this.year = res.data.year;
          this.semester = res.data.semester;
          this.name = res.data.name;
          this.code = res.data.code;
          this.lechours = res.data.lechours;
          this.tutehours = res.data.tutehours;
          this.labhours = res.data.labhours;
          this.evahours = res.data.evahours;
          this.isOnUpdate = true;

        });
      }
    });
  }

  //Adding subjects
  addSubject() {
    this.subjectsService.addSubject(this.year, this.semester, this.name, this.code, this.lechours, this.tutehours, this.labhours, this.evahours ).subscribe(res => {
      this.snackBar.open('Subject is added successfully','', {duration: 2000});    
    }, err => {
      this.snackBar.open('Unsuccessful', '', { duration: 2000 });
    });

    this.clear();
  }

  clear() {
    this.year = '';
    this.semester = '';
    this.name = '';
    this.code = '';
    this.lechours = 0;
    this.tutehours = 0;
    this.labhours = 0;
    this.evahours = 0;
  }

  //Updating subject Details
  updateSubject(){
    this.subjectsService.updateSubjectById(
      this.id,
      {
        year: this.year,
        semester: this.semester,
        name: this.name,
        code: this.code,
        lechours: this.lechours,
        tutehours: this.tutehours,
        labhours: this.labhours,
        evahours: this.evahours
      }
    ).subscribe(res => {
      console.log(res);
      this.snackBar.open('Subject details are successfully updated', null, { duration : 2000});
      this.router.navigate(['/subjects/manage']);
    }, err => {
      this.snackBar.open('Unsuccessfull', null, { duration : 2000});
      console.log(err.message);
    });
  }
}

