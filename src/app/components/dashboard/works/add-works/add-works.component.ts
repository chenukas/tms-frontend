import { Component, OnInit } from '@angular/core';
import { WorksService } from './../../../../services/works.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-works',
  templateUrl: './add-works.component.html',
  styleUrls: ['./add-works.component.scss'],
  providers: [WorksService]
})
export class AddWorksComponent implements OnInit {

  selectedDays: string[];

  constructor(
    public worksService: WorksService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.selectedDays = new Array<string>();
  }

  daysArr = [
    {
      "key":"Monday",
      "value": "monday"
    },
    {
      "key":"Tuesday",
      "value": "tuesday"
    },
    {
      "key":"Wednesday",
      "value": "wednesday"
    },
    {
      "key":"Thursday",
      "value": "thursday"
    },
    {
      "key":"Friday",
      "value": "friday"
    },
    {
      "key":"Saturday",
      "value": "saturday"
    },
    {
      "key":"Sunday",
      "value": "sunday"
    }
  ];

  getTimetableType(event){
    //this.worksService.selectedWorks.timeTableType = event.target.value;
  }

  workingDayChange(event:any, value:string){
    let index = this.selectedDays.indexOf(value);
    if (index == -1){
      this.selectedDays.push(value);
    }
    else {
      this.selectedDays.splice(index, 1);
    }
  }

  createWork() {
    this.worksService.selectedWorks.workingDays = this.selectedDays.toString();
    this.worksService.addWork(this.worksService.selectedWorks).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err.message);
    });
  }

}
