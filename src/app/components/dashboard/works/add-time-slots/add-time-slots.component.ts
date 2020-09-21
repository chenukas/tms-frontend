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

  timeSlotsTimes: string[];

  ngOnInit(): void {
    this.timeSlotsTimes = new Array<string>();

    this.route.queryParams.subscribe(params => {
      if (params._id) {
          this.worksService.viewWorkById(params._id).subscribe((res: { data: any }) => {
          this.timeSlotsService.selectedTimeSlot.workID = params._id;
          this.timeSlotsService.selectedTimeSlot.timeTableID = res.data.timeTableID;
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
    this.timeSlotsTimes.push(startTime+" "+"-"+" "+endTime);

    this.timeSlotsService.selectedTimeSlot.startTime = null;
    this.timeSlotsService.selectedTimeSlot.endTime =  null;

  }

  //delete Time Slots in table
  deleteTimeSlots(timeSlot){
    this.works = this.works.filter(t => t.startTime !== timeSlot.startTime);
  }

  addTime(){
    //this.timeSlotsService.selectedTimeSlot.timeSlots = this.works;
    this.timeSlotsService.selectedTimeSlot.timeSlotsTimes = this.timeSlotsTimes.toString();
    this.timeSlotsService.postTimeSlots(this.timeSlotsService.selectedTimeSlot).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err.message);
    });
  }

}
