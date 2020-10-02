import { Component, OnInit } from '@angular/core';
import { WorksService } from './../../../../services/works.service';


@Component({
  selector: 'app-classroom-timetable',
  templateUrl: './classroom-timetable.component.html',
  styleUrls: ['./classroom-timetable.component.scss']
})
export class ClassroomTimetableComponent implements OnInit {

  public timeTableID: string;
  public roomName: string;

  constructor(
    public worksService: WorksService
  ) { }

  ngOnInit(): void {
  }

  searchTimetable(){

  }

  generatePdf(){

  }

}
