import { Component, OnInit } from '@angular/core';
import { WorksService } from './../../../../services/works.service';
import { RoomService } from './../../../../services/room.service';
import { Room } from 'app/models/room';
import { Works } from './../../../../models/works.model';

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

  constructor(
    public worksService: WorksService,
    public roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.roomNameArry = new Array<string>();
    this.viewGroup();
    this.viewTimeTableID();
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

  }

  generatePdf(){

  }

}
