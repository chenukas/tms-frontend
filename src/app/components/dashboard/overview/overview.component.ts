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
  private loading: boolean;

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.statisticsService.getAllStatistics().subscribe((response: APIResponse) => {
      this.loading = false;
      if (response.success) {
        this.data = response.data;
      }
    })
  }

  public get isLoading(): boolean {
    return this.loading;
  }

}
