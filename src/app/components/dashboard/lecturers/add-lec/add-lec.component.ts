import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LecturersService } from 'app/services/lecturers.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lecturer } from 'app/models/lecturer';
import { APIResponse } from 'app/models/apiresponse';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-lec',
  templateUrl: './add-lec.component.html',
  styleUrls: ['./add-lec.component.scss']
})

export class AddLecComponent implements OnInit {

  private lecturerFormGroup : FormGroup;
  public id : string;
  public isOnUpdate : boolean;

  email = new FormControl('', [Validators.required, Validators.email]);

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
      email: ['', Validators.email],
      faculty: ['', Validators.required],
      department: ['', Validators.required],
      center: ['', Validators.required],
      building: ['', Validators.required],
      level: ['', Validators.required]
    })

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.lecturersService.viewLecturerById(params.id).subscribe((res: APIResponse) => {
          this.id = params.id;
          this.isOnUpdate = true;
          this.lecturerFormGroup.patchValue(res.data);
        });

      } else {
        this.isOnUpdate = false;
      }
    })
  }

  public get LecturerFormGroup(): FormGroup{
    return this.lecturerFormGroup;
  }

  addLecturer() {
      const lecturer = new Lecturer(this.lecturerFormGroup.getRawValue());

      this.lecturersService.addLecturer(lecturer).subscribe(res => {

        this.snackbar.open('Added Successfully', '', {duration: 2000});

        this.clear();
      }, err => {

        this.snackbar.open('Unsuccessful', '', { duration: 2000 });
      });

      this.clear();
  }

  clear() {
    this.lecturerFormGroup.reset();
  }

}
