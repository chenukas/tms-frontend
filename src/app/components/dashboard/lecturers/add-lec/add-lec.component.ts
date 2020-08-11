import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LecturersService } from 'app/services/lecturers.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lecturer } from 'app/models/lecturer';

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

  private lecturerFormGroup : FormGroup;
  //private matcher: LecturerErrorStateMatcher;
  public id : String;
  public isOnUpdate : boolean;

  //email = new FormControl('', [Validators.required, Validators.email]);

  constructor( 
      private formBuilder: FormBuilder,
      private lecturersService: LecturersService,
      private snackbar: MatSnackBar,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.lecturerFormGroup = this.formBuilder.group({
      empid: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      faculty: ['', Validators.required],
      department: ['', Validators.required],
      center: ['', Validators.required],
      building: ['', Validators.required],
      level: ['', Validators.required]
    })

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.isOnUpdate = true;
        this.id = params.id;
      } else {
        this.isOnUpdate = false;
      }
    });
  }

  //Add lecturer details 
  public addLecturers() {

    const lecturer = new Lecturer( this.lecturerFormGroup.getRawValue());

    this.lecturersService.addLecturers(lecturer).subscribe(res =>{
      //console.log(res);
      this.snackbar.open('Added successfully!', '', { duration: 2000 });

      this.clear();

    },err => {

      this.snackbar.open('Please fill required fields', '', {
        duration: 2000
      });
    });
    this.clear();
  }

  public clear() {
    this.lecturerFormGroup.reset ();
  }

}
