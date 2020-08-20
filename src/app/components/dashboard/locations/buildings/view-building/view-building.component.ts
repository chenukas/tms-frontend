import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingService } from 'app/services/building.service';
import { Building } from 'app/models/building';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'app/models/room';
import { APIResponse } from 'app/models/apiresponse';
import { AlertService } from 'app/services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRoomComponent } from '../../rooms/add-new-room/add-new-room.component';
import { RoomService } from 'app/services/room.service';

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
    private buildingService: BuildingService,
    private roomService: RoomService,
    private alertService: AlertService,
    private router: Router,
    private matDialog: MatDialog
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

  public save() {
    this.alertService.showConfirm('Update Building?', 'This will save the changes you have made.', 'warning').then(result => {
        if (result.value) {
          this.loading = true;
          this.buildingService.updateBuilding(this.id, this.building.building_name).subscribe((response: APIResponse) => {
            this.alertService.showAlert('Success!', 'The building information was updated successfully!', 'success');
            this.getBuildingById(this.id);
          });
        }
    })
  }

  public deleteBuilding() {
    this.alertService.showConfirm('Are you sure?', `This will delete buiding ${this.building.building_name} and is not reversible!`).then(result => {
      if (result.value) {
        this.loading = true;
        this.buildingService.deleteBuiding(this.id).subscribe((response: APIResponse) => {
          if (response.success) {
            this.alertService.showAlert('Deleted!', `${this.building.building_name} was delete successfully from the system`, 'success');
            this.router.navigate(['locations/buildings']);
          }
        });
      }
    })
    
  }

  public addRoom() {
    let ref = this.matDialog.open(AddNewRoomComponent, {
      width: '50%',
      disableClose: true,
      data: {
        building_id: this.id
      },
    });

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.getBuildingById(this.id);
      }
    })
  }

  public deleteRoom(id: string, name: string) {
    this.alertService.showConfirm('Are you sure?', `This will delete the room ${name} from the building ${this.building.building_name} and is not reversible!`).then(result => {
      if (result.value) {
        this.loading = true;
        this.roomService.deleteRoom(id).subscribe((response: APIResponse) => {
          if (response.success) {
            this.alertService.showAlert('Deleted!', `${name} was delete successfully from the building ${this.building.building_name}`, 'success');
            this.getBuildingById(this.id);
          }
        });
      }
    })
  }

}
