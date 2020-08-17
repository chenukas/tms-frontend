import { Component, OnInit } from '@angular/core';
import { Works } from 'app/models/works.model';
import { WorksService } from './../../../../services/works.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-manage-works',
  templateUrl: './manage-works.component.html',
  styleUrls: ['./manage-works.component.scss'],
  providers: [WorksService]
})
export class ManageWorksComponent implements OnInit {

  constructor(
    public worksService: WorksService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks(){
    this.worksService.viewWorks().subscribe((res) => {
      this.worksService.works = res as Works[];
    });
  }

  deleteWork(_id:string){
    this.worksService.deleteWorks(_id).subscribe((res)=>{
      this.getWorks()
      this.worksService.selectedWorks = new Works();
    });
  }

  navigateEditWork(_id: String) {
    this.router.navigate(['/works/editWorks'], {queryParams: {_id} });
  }

  navigateAddTimeSlots(_id: String) {
    this.router.navigate(['/works/addSlots'], {queryParams: {_id} });
  }

}
