import { Component, OnInit } from '@angular/core';
import { BatchesService } from 'app/services/batches.service';
import { UnavailabilityService } from 'app/services/unavailability.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-u-batches',
  templateUrl: './u-batches.component.html',
  styleUrls: ['./u-batches.component.scss']
})
export class UBatchesComponent implements OnInit {
  public batches: [];
  public batchId: string;
  public day: string;
  public startTime: string;
  public endTime: string;


  constructor(
    private snackbar: MatSnackBar,
    private batchesService: BatchesService,
    private unavailabilityService: UnavailabilityService
  ) { }

  ngOnInit(): void {

    this.batchId = "";
    this.day = "";
    this.startTime = "";
    this.endTime = "";
    this.viewAllBatches();
  }

  viewAllBatches() {
    this.batchesService.viewBatches().subscribe((res: {data: any}) => {
      this.batches = res.data;
      console.log(this.batches);
    });
  }

  save() {
    console.log(this.batchId);
    this.unavailabilityService.addBatchUnavailability(this.batchId,this.day,this.startTime,this.endTime).subscribe(
      (res) => {
        console.log(res);
        this.snackbar.open("Constraint: Unavailability of batch is added successfully", "" , {
          duration: 2000,
        });
        this.clear();
      },
      (err) => {
        this.snackbar.open("Constraint: Unavailability of batch is adding not successful", "", {
          duration: 2000,
        });
        console.log(err.message);
      }
    );
  }

  clear() {
    this.day = "";
    this.startTime = "";
    this.endTime = "";
  }
}
