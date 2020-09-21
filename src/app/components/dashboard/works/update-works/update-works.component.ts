import { Component, OnInit } from '@angular/core';
import { WorksService } from './../../../../services/works.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Works } from 'app/models/works.model';


@Component({
  selector: 'app-update-works',
  templateUrl: './update-works.component.html',
  styleUrls: ['./update-works.component.scss']
})
export class UpdateWorksComponent implements OnInit {

  selectedDays: string[];
  disable: boolean;
  count: number;
  cheDisable: boolean;
  labelDisable: boolean;

  constructor(
    public worksService: WorksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedDays = new Array<string>();
    this.disable = true;
    this.count = 0;
    this.cheDisable = false;
    this.labelDisable = false;

    this.route.queryParams.subscribe(params => {
      if (params._id) {
          this.worksService.viewWorkById(params._id).subscribe((res: { data: any }) => {
          this.worksService.selectedWorks._id = params._id;
          this.worksService.selectedWorks.timeTableID = res.data.timeTableID;
          this.worksService.selectedWorks.timeTableType = res.data.timeTableType
          this.worksService.selectedWorks.noOfWorkingDays = res.data.noOfWorkingDays;
          this.worksService.selectedWorks.noOfHours = res.data.noOfHours;
          this.worksService.selectedWorks.noOfMinutes = res.data.noOfMinutes;
          this.selectedDays = res.data.workingDays.split(",");
        });
      }
    });


  }

  weekdaysArr = [
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
    }
  ];

  weekendsArr = [
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

    workingDayChange(event:any, value:string){
      let index = this.selectedDays.indexOf(value);
      if (index == -1){
        this.selectedDays.push(value);

      }
      else {
        this.selectedDays.splice(index, 1);
      }
    }

    updateWorks(){
      this.worksService.selectedWorks.workingDays = this.selectedDays.toString();
      if(this.selectedDays.length != this.worksService.selectedWorks.noOfWorkingDays){
        this.labelDisable = true;
      }
      else{
        this.worksService.editWorks(this.worksService.selectedWorks).subscribe((res) => {
          this.worksService.viewWorks()
          this.worksService.selectedWorks = new Works();
          this.disable = false;
          this.labelDisable = false;
          setTimeout(() => {
          this.disable = true;
        }, 1000);
        })
      }

    }

}
