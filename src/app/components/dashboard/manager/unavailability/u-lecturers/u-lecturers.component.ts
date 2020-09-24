import { Component, OnInit } from '@angular/core';
import { LecturersService } from 'app/services/lecturers.service';
import { UnavailabilityService } from 'app/services/unavailability.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-u-lecturers',
  templateUrl: './u-lecturers.component.html',
  styleUrls: ['./u-lecturers.component.scss']
})
export class ULecturersComponent implements OnInit {

  public lecturers: [];
  public lecturerId: string;
  public day: string;
  public startTime: string;
  public endTime: string;

  constructor(
    private lecturersService: LecturersService,
    private snackbar: MatSnackBar,
    private unavailabilityService: UnavailabilityService 
  ) { }

  ngOnInit(): void {
    this.lecturerId = "";
    this.day = "";
    this.startTime = "";
    this.endTime = "";
    this.viewAllLecturers();
  }

  viewAllLecturers() {
    this.lecturersService.viewLecturers().subscribe((res: {data: any}) => {
      this.lecturers = res.data;
      console.log(this.lecturers);
    });
  }

  save() {
    console.log(this.lecturerId);
    this.unavailabilityService.addLecturerUnavailability(this.lecturerId,this.day,this.startTime,this.endTime).subscribe(
      (res) => {
        console.log(res);
        this.snackbar.open("Constraint: Unavailability of lecturer is added successfully", "" , {
          duration: 2000,
        });
        this.clear();
      },
      (err) => {
        this.snackbar.open("Constraint: Unavailability of lecturer is adding not successful", "", {
          duration: 2000,
        });
        console.log(err.message);
      }
    );
  }

  clear() {
    this.day = "";
    this.startTime = "";
    this.endTime = "";
  }
}
