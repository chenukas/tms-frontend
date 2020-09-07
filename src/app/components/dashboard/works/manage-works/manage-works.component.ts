import { Component, OnInit } from '@angular/core';
import { Works } from 'app/models/works.model';
import { WorksService } from './../../../../services/works.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dialogBox',
  templateUrl: 'deleteBox.html',
})
export class DeleteDialogBox6 {
  constructor() {}

  public deleteWork() {}

}


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
    private dialog: MatDialog
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
    this.router.navigate(['/works/edit'], {queryParams: {_id} });
  }

  navigateAddTimeSlots(_id: String) {
    this.router.navigate(['/works/timeslots'], {queryParams: {_id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox6);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteWork(_id);
      }
    });
  }


}
