import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'app/services/sessions.service';
import { ConsecutiveSService } from 'app/services/consecutive-s.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-consecutive-s',
  templateUrl: './consecutive-s.component.html',
  styleUrls: ['./consecutive-s.component.scss']
})
export class ConsecutiveSComponent implements OnInit {

  public lsessions: [];
  public tsessions: [];
  public session1: string;
  public session2: string;

  constructor(
    private sessionsService: SessionsService,
    private consecutiveSService: ConsecutiveSService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.session1 = "";
    this.session2 = "";
    this.viewAllLSessions();
    this.viewAllTSessions();
  }

  viewAllLSessions() {
    this.sessionsService.viewLectureSessions().subscribe((res: {data: any}) => {
      this.lsessions = res.data;
      console.log(this.lsessions);
    });
  }

  viewAllTSessions() {
    this.sessionsService.viewTutorialSessions().subscribe((res: {data: any}) => {
      this.tsessions = res.data;
      console.log(this.tsessions);
    });
  }

  save() {
    this.consecutiveSService.addConsecutiveS(this.session1,this.session2).subscribe(
      (res) => {
        console.log(res);
        this.snackbar.open("Constraint: Consecutive session is added successfully", "" , {
          duration: 2000,
        });
        this.clear();
      },
      (err) => {
        this.snackbar.open("Constraint: Consecutive session is adding not successful", "", {
          duration: 2000,
        });
        console.log(err.message);
      }
    );
  }

  clear() {
    this.session1 = "";
    this.session2 = "";
  }

}
