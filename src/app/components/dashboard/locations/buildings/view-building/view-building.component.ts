import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildingService } from 'app/services/building.service';
import { Building } from 'app/models/building';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'app/models/room';
import { APIResponse } from 'app/models/apiresponse';

@Component({
  selector: 'app-view-building',
  templateUrl: './view-building.component.html',
  styleUrls: ['./view-building.component.scss']
})
export class ViewBuildingComponent implements OnInit {

  private id: string;
  private building: Building;
  private rooms: MatTableDataSource<Room>;
  private loading: boolean;
  displayedColumns: string[] = ['room_name', 'room_type', 'actions'];

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe(params =>  {
      this.id = params.get('id');
      this.getBuildingById(this.id);
    })
  }

  public get isLoading(): boolean {
    return this.loading;
  }

  public get Building(): Building {
    return this.building;
  }

  public get Rooms(): MatTableDataSource<Room> {
    return this.rooms;
  }

  private getBuildingById(id: string) {
    this.buildingService.getBuildingById(id).subscribe((response: APIResponse) => {
      this.building = response.data as Building;
      this.rooms = new MatTableDataSource<Room>(this.building.rooms);
      this.loading = false;
    });
  }

  public getTypeOfRoom(type: number) {
    return type === 1 ? 'Lecture Hall' : 'Laboratory';
  }

}
