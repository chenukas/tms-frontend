import { Component, OnInit } from '@angular/core';
import { LecturersService } from 'app/services/lecturers.service';
import { SessionsService } from "app/services/sessions.service";
import { TimeSlotsService } from './../../../../services/time-slots.service';
import { WorksService } from './../../../../services/works.service';
import { Works } from 'app/models/works.model';
import { Lecturer } from 'app/models/lecturer.model';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-lecturer-timetable',
  templateUrl: './lecturer-timetable.component.html',
  styleUrls: ['./lecturer-timetable.component.scss']
})
export class LecturerTimetableComponent implements OnInit {

  public timeTableID: string;
  public timeTableTypeID: string;
  public lecturerName: string;
  public working: string[];
  public tID: string;
  public time_slots: string[];

  constructor(
    public lecturersService: LecturersService,
    public worksService: WorksService,
    public timeSlotsService: TimeSlotsService,
    public sessionsService: SessionsService,
  ) { }

  ngOnInit(): void {
    this.viewAllLecturers();
    this.viewTimeTableID();
  }

  viewAllLecturers() {
    this.lecturersService.viewLecturers().subscribe((res : APIResponse) => {
      this.lecturersService.lecturer = res.data as Lecturer[];
    })
  }

  viewTimeTableID(){
    this.worksService.viewWorks().subscribe((res) => {
      this.worksService.works = res as Works[];
    });
  }

  searchTimetable(){
    this.worksService.viewWorkByTimeID(this.timeTableID).subscribe((res: { data: any }) => {
      this.working = res.data.workingDays.split(",");
    });
    this.timeSlotsService.viewTimeSlotsByTimeID(this.timeTableID).subscribe((res: { data: any }) => {
      this.time_slots = res.data.timeSlotsStartTimes.split(",");
      this.time_slots = res.data.timeSlotsEndTimes.split(",");

      console.log(res.data.timeSlotsStartTimes);
      console.log(res.data.timeSlotsEndTimes);
    });

    this.sessionsService.viewSessions().subscribe((res: APIResponse) => {
      console.log(res.data);
    });


  }

}
