import { Component, OnInit } from '@angular/core';
import { TimeSlotsService } from './../../../../services/time-slots.service';
import { WorksService } from './../../../../services/works.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-time-slots',
  templateUrl: './add-time-slots.component.html',
  styleUrls: ['./add-time-slots.component.scss']
})
export class AddTimeSlotsComponent implements OnInit {

  constructor(
    public timeSlotsService: TimeSlotsService,
    private route: ActivatedRoute,
    private router: Router,
    public worksService: WorksService,
  ) { }

  timeSlotsStartTime: string[];
  timeSlotsEndTime: string[];

  ngOnInit(): void {
    this.timeSlotsStartTime = new Array<string>();
    this.timeSlotsEndTime = new Array<string>();

    this.route.queryParams.subscribe(params => {
      if (params._id) {
          this.worksService.viewWorkById(params._id).subscribe((res: { data: any }) => {
          this.timeSlotsService.selectedTimeSlot.timeTableID = params._id;
          this.timeSlotsService.selectedTimeSlot.timeTableType = res.data.timeTableType
        });
      }
    });
  }

  works = [
    {
      startTime: '',
      endTime: ''
    }
  ];

  //add time slots in to the table
  addTimeSlots(startTime, endTime){
    var newTimeSlot = {
      startTime: startTime,
      endTime: endTime
    };
    this.works.push(newTimeSlot);
    this.timeSlotsStartTime.push(startTime);
    this.timeSlotsEndTime.push(endTime);

    this.timeSlotsService.selectedTimeSlot.startTime = null;
    this.timeSlotsService.selectedTimeSlot.endTime =  null;

  }

  //delete Time Slots in table
  deleteTimeSlots(timeSlot){
    this.works = this.works.filter(t => t.startTime !== timeSlot.startTime);
  }

  addTime(){
    //this.timeSlotsService.selectedTimeSlot.timeSlots = this.works;
    this.timeSlotsService.selectedTimeSlot.timeSlotsStartTimes = this.timeSlotsStartTime.toString();
    this.timeSlotsService.selectedTimeSlot.timeSlotsEndTimes = this.timeSlotsEndTime.toString();
    console.log(this.timeSlotsService.selectedTimeSlot);
    this.timeSlotsService.postTimeSlots(this.timeSlotsService.selectedTimeSlot).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err.message);
    });
  }

}
