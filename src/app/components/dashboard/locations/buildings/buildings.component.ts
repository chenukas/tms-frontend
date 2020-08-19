import { Component, OnInit } from '@angular/core';
import { BuildingService } from 'app/services/building.service';
import { APIResponse } from 'app/models/apiresponse';
import { Building } from 'app/models/building';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddNewBuildingComponent } from './add-new-building/add-new-building.component';
import alert from 'sweetalert2';
import { Router } from '@angular/router';

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
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getAllBuildings();
  }

  private showAlert(title: string, message: string, type: any) {
    alert.fire({
      title,
      text: message,
      icon: type,
      showCloseButton: true
    });
  }

  private showConfirm(title: string, message: string, icon='warning') {
    return alert.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
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
        this.showAlert('Created!', `${building_name} was added successfully as a building to the system`, 'success');
        this.getAllBuildings();
      }
    })
  } 

  private deleteBuilding(id: string, building_name: string) {
    this.showConfirm('Are you sure?', `This will delete buiding ${building_name} and is not reversible!`).then(result => {
      if (result.value) {
        this.buildingService.deleteBuiding(id).subscribe((response: APIResponse) => {
          if (response.success) {
            this.showAlert('Deleted!', `${building_name} was delete successfully from the system`, 'success');
            this.getAllBuildings();
          }
        });
      }
    })
    
  }

  public viewBuilding(id: string) {
    this.router.navigate(['locations/buildings/' + id]);
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
