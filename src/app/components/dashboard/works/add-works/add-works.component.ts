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
  disable: boolean;
  count: number;
  cheDisable: boolean;

  constructor(
    public worksService: WorksService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.selectedDays = new Array<string>();
    this.disable = true;
    this.count = 1;
    this.cheDisable = true;

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

  getNoOfWorkingDays(){
    this.cheDisable = false;
  }

  workingDayChange(event:any, value:string){
    let index = this.selectedDays.indexOf(value);
    if (index == -1){
      this.selectedDays.push(value);
      if(this.count == this.worksService.selectedWorks.noOfWorkingDays){
        this.cheDisable = true;
      }
      else{
        this.count = this.count + 1;
      }
    }
    else {
      this.selectedDays.splice(index, 1);
    }
  }

  createWork() {
    this.worksService.selectedWorks.workingDays = this.selectedDays.toString();
    this.worksService.addWork(this.worksService.selectedWorks).subscribe(response => {
      console.log(response);
      this.disable = false;
      setTimeout(() => {
        this.disable = true;
      }, 1000);

    }, err => {
      console.log(err.message);
    });
  }

}
