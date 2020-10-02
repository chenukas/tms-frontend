import { SlotsAndSession } from './../../../../models/slots-and-session.model';
import { TimeSlots } from './../../../../models/time-slots.model';
import { Batch } from './../../../../models/batch.model';
import { Subject } from './../../../../models/subject.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LecturersService } from 'app/services/lecturers.service';
import { SessionsService } from "app/services/sessions.service";
import { TimeSlotsService } from './../../../../services/time-slots.service';
import { WorksService } from './../../../../services/works.service';
import { Works } from 'app/models/works.model';
import { Room } from 'app/models/room';
import { Lecturer } from 'app/models/lecturer.model';
import { Session } from './../../../../models/session.model';
import { SlotsAndSessionService } from './../../../../services/slots-and-session.service';
import { RoomService } from './../../../../services/room.service';

import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-classroom-timetable',
  templateUrl: './classroom-timetable.component.html',
  styleUrls: ['./classroom-timetable.component.scss']
})
export class ClassroomTimetableComponent implements OnInit {

  public timeTableID: string;
  public roomName: string;

  public roomNameArry: string[];

  public studentbatch: string;

  public disable: string;

  public time_id: string;
  public timeTableTypeID: string;
  public working: string[];
  public tID: string;
  public start_time_slots: string[];
  public end_time_slots: string[];

  public time_slots: string[];
  public allSessionLec : Lecturer[];
  public allLecturerSession : Lecturer[];
  public allSessionSub : Subject[];
  public allSessionBatch : Batch[];

  public getSession: SlotsAndSession[];
  public timeSession: Session[];

  constructor(
    public lecturersService: LecturersService,
    public worksService: WorksService,
    public timeSlotsService: TimeSlotsService,
    public sessionsService: SessionsService,
    public slotsAndSessionService: SlotsAndSessionService,
    public roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.disable = "true";
    this.time_slots = new Array<string>();
    this.timeSession = new Array<Session>();
    this.roomNameArry = new Array<string>();
    this.getSession = new Array<SlotsAndSession>();

    this.viewTimeTableID();
    this.viewGroup();
  }

  viewTimeTableID(){
    this.worksService.viewWorks().subscribe((res) => {
      this.worksService.works = res as Works[];
    });
  }

  viewGroup(){
    this.roomService.getAllRooms().subscribe((res : APIResponse) => {
      this.roomService.room = res.data as Room[];
      console.log(this.roomService.room.length);

      var len = this.roomService.room.length
      var i = 0;
      for(i = 0; i < len; i++){
        this.roomNameArry.push(this.roomService.room[i].room_name);
      }
    });
  }

  searchTimetable(){

    this.disable = "false";

    this.worksService.viewWorkByTimeID(this.timeTableID).subscribe((res: { data: any }) => {
      this.working = res.data.workingDays.split(",");
    });

    this.timeSlotsService.viewTimeSlotsByTimeID(this.timeTableID).subscribe((res: { data: any }) => {
      this.start_time_slots = res.data.timeSlotsStartTimes.split(",");
      this.end_time_slots = res.data.timeSlotsEndTimes.split(",");

      var i = 0;

      for(i = 0; i < this.start_time_slots.length; i++){
        var start = this.start_time_slots[i];
        var end = this.end_time_slots[i];

        var fullSlots = start+"-"+end;
        this.time_slots.push(fullSlots);

      }
    });

    this.sessionsService.viewSessions().subscribe((res: APIResponse) => {
      this.sessionsService.session = res.data as Session[];

      console.log(this.sessionsService.session);

      length = this.sessionsService.session.length;

      var i = 0;

      for(i = 0; i < length; i++){

        //this.allSessionLec = this.sessionsService.session[i].selectedLecturer;

        console.log(this.allSessionLec);

        var resultLec = [];
        var resultLecturer = [];
        var resultBatch = [];
        var resultSub = [];

        var addSession = [];

        var lecturerFirstName: string;
        var lecturerLastName: string;
        var subjectName: string;
        var tagName: string;
        var groupName: string;
        var studentCount: string;
        var durationSession: string;
        var subjectCode: string;
        var classRoom: string;

        var lecFullName: string;

        for (var x in this.allSessionLec){
          this.allSessionLec.hasOwnProperty(x) && resultLec.push(this.allSessionLec[x])
        }

          this.allLecturerSession = this.sessionsService.session[i].selectedLecturer;
          this.allSessionSub = this.sessionsService.session[i].selectedSubject;
          this.allSessionBatch = this.sessionsService.session[i].selectedGroup;

          console.log(this.allLecturerSession);
          console.log(this.allSessionSub);
          console.log(this.allSessionBatch);

          for (var x in this.allLecturerSession){
            this.allLecturerSession.hasOwnProperty(x) && resultLecturer.push(this.allLecturerSession[x]);
          }
          for (var x in this.allSessionSub){
            this.allSessionSub.hasOwnProperty(x) && resultSub.push(this.allSessionSub[x]);
          }
          for (var x in this.allSessionBatch){
            this.allSessionBatch.hasOwnProperty(x) && resultBatch.push(this.allSessionBatch[x]);
          }

          lecturerFirstName = resultLecturer[3];
          lecturerLastName = resultLecturer[4];
          subjectName = resultSub[5];
          subjectCode = resultSub[6];
          classRoom = this.roomName;
          tagName = this.sessionsService.session[i].selectedTag;
          groupName = resultBatch[1];
          studentCount = this.sessionsService.session[i].studentCount;
          durationSession = this.sessionsService.session[i].duration;

          lecFullName = lecturerFirstName + " " + lecturerLastName;

          this.slotsAndSessionService.selectedSlotsAndSession.lectureName = lecFullName;
          this.slotsAndSessionService.selectedSlotsAndSession.subjectName = subjectName;
          this.slotsAndSessionService.selectedSlotsAndSession.subjectCode = subjectCode;
          this.slotsAndSessionService.selectedSlotsAndSession.tagName = tagName;
          this.slotsAndSessionService.selectedSlotsAndSession.batchName = groupName;
          this.slotsAndSessionService.selectedSlotsAndSession.classRoom = classRoom;

          this.slotsAndSessionService.addSlotsAndSession(this.slotsAndSessionService.selectedSlotsAndSession).subscribe(response => {
            console.log(response);
          }, err => {
            console.log(err.message);
          });

          this.slotsAndSessionService.viewSlotsAndSession().subscribe((res) => {
            this.slotsAndSessionService.slotsAndSession = res as SlotsAndSession[];

            var i = 0;
            var length = this.slotsAndSessionService.slotsAndSession.length;

            var get = [];

            for(i=0; i<length; i++){
              this.getSession.push(this.slotsAndSessionService.slotsAndSession[i]);
              console.log(this.getSession[i]);

              this.slotsAndSessionService.deleteSlotsAndSession(this.getSession[i]._id).subscribe((res)=>{
            });
            }
          });

      }
    });

  }

  generatePdf(){
    const options = {
      filename: this.roomName+'.pdf',
      image: { type: 'jpeg'},
      html2canvas : {},
      jsPDF : {orientation:'portrait'}
    }

    const content: Element = document.getElementById('content');

    html2pdf()
    .from(content)
    .set(options)
    .save()
  }

}
