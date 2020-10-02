import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomService } from 'app/services/room.service';
import { APIResponse } from 'app/models/apiresponse';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-suitable-rooms',
  templateUrl: './manage-suitable-rooms.component.html',
  styleUrls: ['./manage-suitable-rooms.component.scss']
})
export class ManageSuitableRoomsComponent implements OnInit {

  public rooms: [];
  public resource;
  public suitable_rooms: MatTableDataSource<any>;
  public selectedRoomId: string;
  displayedColumns = ['room', 'action'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { resource: string, id: string },
    private dialogRef: MatDialogRef<ManageSuitableRoomsComponent>,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.loadAllRooms();
    this.getResourceById();
  }

  private loadAllRooms() {
    this.roomService.getAllRooms().subscribe((response: APIResponse) => {
      this.rooms = response.data;
    })
  }

  private updateResource(roomIds: string[]) {
    this.roomService.updateSuitableRoomsByResource(this.data.resource, this.data.id, roomIds).subscribe((response: APIResponse) => {
      this.getResourceById();
    })
  }

  private getResourceById() {
    this.roomService.getSuitableRoomsByResource(this.data.resource, this.data.id).subscribe((response: APIResponse) => {
      this.resource = response.data;
      this.suitable_rooms = this.resource.suitable_rooms;
    });
  }

  public addSuitableRoom() {
    console.log('suitable rooms');
    const roomIds = this.resource.suitable_rooms.map(r => r._id);
    roomIds.push(this.selectedRoomId);
    this.updateResource(roomIds);
  }

  public removeSuitableRoom(_id: string) {
    const roomIds = this.resource.suitable_rooms.map(r => r._id).filter(i => i !== _id);
    this.updateResource(roomIds);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
