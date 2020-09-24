import { Component, OnInit } from '@angular/core';
import { BatchesService } from 'app/services/batches.service';

@Component({
  selector: 'app-u-batches',
  templateUrl: './u-batches.component.html',
  styleUrls: ['./u-batches.component.scss']
})
export class UBatchesComponent implements OnInit {
  public batches: [];

  constructor(
    private batchesService: BatchesService
  ) { }

  ngOnInit(): void {
    this.viewAllBatches();
  }

  viewAllBatches() {
    this.batchesService.viewBatches().subscribe((res: {data: any}) => {
      this.batches = res.data;
      console.log(this.batches);
    });
  }

}
