import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionsService } from 'app/services/sessions.service';
import { UnavailabilityService } from 'app/services/unavailability.service';

@Component({
  selector: 'app-u-sessions',
  templateUrl: './u-sessions.component.html',
  styleUrls: ['./u-sessions.component.scss']
})
export class USessionsComponent implements OnInit {

  public sessions: [];
  public sessionId: string;
  public day: string;
  public startTime: string;
  public endTime: string;

  constructor(
    private sessionsService: SessionsService,
    private snackbar: MatSnackBar,
    private unavailabilityService: UnavailabilityService
  ) { }

  ngOnInit(): void {
    this.sessionId = "";
    this.day = "";
    this.startTime = "";
    this.endTime = "";
    this.viewAllSessions();
  }

  viewAllSessions() {
    this.sessionsService.viewSessions().subscribe((res: {data: any}) => {
      this.sessions = res.data;
      console.log(this.sessions);
    });
  }

  save() {
    console.log(this.sessionId);
    this.unavailabilityService.addSessionUnavailability(this.sessionId,this.day,this.startTime,this.endTime).subscribe(
      (res) => {
        console.log(res);
        this.snackbar.open("Constraint: Unavailability of session is added successfully", "" , {
          duration: 2000,
        });
        this.clear();
      },
      (err) => {
        this.snackbar.open("Constraint: Unavailability of session is adding not successful", "", {
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
