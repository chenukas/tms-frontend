import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'app/services/statistics.service';
import { APIResponse } from 'app/models/apiresponse';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public data;

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit(): void {
    this.statisticsService.getAllStatistics().subscribe((response: APIResponse) => {
      if (response.success) {
        this.data = response.data;
      }
    })
  }

}
