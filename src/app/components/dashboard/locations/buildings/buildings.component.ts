import { Component, OnInit } from '@angular/core';
import { BuildingService } from 'app/services/building.service';
import { APIResponse } from 'app/models/apiresponse';
import { Building } from 'app/models/building';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddNewBuildingComponent } from './add-new-building/add-new-building.component';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  private buildings: MatTableDataSource<Building>;
  private loading: boolean;
  displayedColumns: string[] = ['building_name', 'number_of_rooms', 'actions'];

  constructor(
    private buildingService: BuildingService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getAllBuildings();
  }

  private getAllBuildings() {
    this.buildingService.getAllBuildings().subscribe((response: APIResponse) => {
      this.buildings = new MatTableDataSource<Building>(response.data);
      this.loading = false;
    });
  }

  private createNewBuilding(building_name: string) {
    this.buildingService.addBuilding(building_name).subscribe((response: APIResponse) => {
      if (response.success) {
        this.getAllBuildings();
      }
    })
  } 

  public get Buildings(): MatTableDataSource<Building> {
    return this.buildings;
  }

  public get isLoading(): boolean {
    return this.loading;
  }

  public openNewBuildingDialog() {
    const ref = this.matDialog.open(AddNewBuildingComponent, {
      width: '50%',
      disableClose: true
    });

    ref.afterClosed().subscribe((building_name) => {
      if (building_name) {
        this.createNewBuilding(building_name);
      }
    })
  }

}
