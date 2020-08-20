import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRoomComponent } from './add-new-room/add-new-room.component';
import { Room } from 'app/models/room';
import { RoomService } from 'app/services/room.service';
import { APIResponse } from 'app/models/apiresponse';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from 'app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  private rooms: MatTableDataSource<Room>;
  private loading: boolean;
  displayedColumns: string[] = ['room_name', 'room_type', 'building', 'actions'];


  constructor(
    private matDialog: MatDialog,
    private roomService: RoomService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadAllRooms();
  }

  private loadAllRooms() {
    this.roomService.getAllRooms().subscribe((response: APIResponse) => {
      this.rooms = new MatTableDataSource<Room>(response.data as Room[]);
      this.loading = false;
    });
  }

  public get isLoading(): boolean {
    return this.loading;
  }

  public get Rooms(): MatTableDataSource<Room> {
    return this.rooms;
  }

  public openNewRoomModal() {
    const ref = this.matDialog.open(AddNewRoomComponent, {
      width: '50%',
      disableClose: true,
    });

    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.loading = true;
        this.loadAllRooms();
      }
    })
  }

  public getTypeOfRoom(type: number) {
    return type === 1 ? 'Lecture Hall' : 'Laboratory';
  }

  public deleteRoom(id: string, name: string, building_name: string) {
    this.alertService.showConfirm('Are you sure?', 
      building_name ? 
      `This will delete the room ${name} from the building ${building_name} and is not reversible!` : 
      `This will delete the room ${name}  andd is not reversible!`).then(result => {
      if (result.value) {
        this.loading = true;
        this.roomService.deleteRoom(id).subscribe((response: APIResponse) => {
          if (response.success) {
            this.alertService.showAlert('Deleted!', 
              building_name ? 
              `${name} was delete successfully from the building ${building_name}` : 
              `${name} was delete successfully`, 'success');
            this.loadAllRooms();
          }
        });
      }
    })
  }

  public viewRoom(id: string) {
    this.router.navigate(['/locations/rooms/' + id]);
  }

  

}
