import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomService } from 'app/services/room.service';
import { BuildingService } from 'app/services/building.service';
import { Building } from 'app/models/building';
import { APIResponse } from 'app/models/apiresponse';
import { AlertService } from 'app/services/alert.service';

@Component({
  selector: 'app-add-new-room',
  templateUrl: './add-new-room.component.html',
  styleUrls: ['./add-new-room.component.scss']
})
export class AddNewRoomComponent implements OnInit {

  private buildings: Building[];

  public building_id: string;
  public room_name: string;
  public room_type: number = 1;
  public selectBuilding: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddNewRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { building_id },
    private roomService: RoomService,
    private buildingService: BuildingService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    if (!this.data || !this.data.building_id) {
      this.selectBuilding = true;
      this.loadAllBuildings();
    } else {
      this.building_id = this.data.building_id;
    }
  }

  private loadAllBuildings() {
    console.log('Loading all buildings');
    this.buildingService.getAllBuildings().subscribe((response: APIResponse) => {
      if (response.success) {
        this.buildings = response.data as Building[];
      }
    })
  }

  public get Buildings(): Building[] {
    return this.buildings;
  }

  public save() {
    this.roomService.createRoomInBuilding(this.building_id, this.room_name, this.room_type).subscribe((response: APIResponse) => {
      if (response.success) {
        this.dialogRef.close(true);
        this.alertService.showAlert('Success!', 'Created new room in building!', 'success');
      }
    })
  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
