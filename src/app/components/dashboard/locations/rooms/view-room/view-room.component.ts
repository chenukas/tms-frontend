import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'app/services/room.service';
import { AlertService } from 'app/services/alert.service';
import { Room } from 'app/models/room';
import { TileStyler } from '@angular/material/grid-list/tile-styler';
import { APIResponse } from 'app/models/apiresponse';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss']
})
export class ViewRoomComponent implements OnInit {

  private id: string;
  private room: Room;
  private loading: boolean;


  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getRoomById();
    })
  }

  private getRoomById() {
    this.roomService.getRoomById(this.id).subscribe((response: APIResponse) => {
      this.room = response.data as Room;
      this.loading = false;
    });
  }

  public get isLoading(): boolean {
    return this.loading;
  }

  public get Room(): Room {
    return this.room;
  }

  public deleteRoom() {
    this.alertService.showConfirm('Are you sure?', `This will delete the room ${this.room.room_name} and is not reversible!`).then(result => {
      if (result.value) {
        this.loading = true;
        this.roomService.deleteRoom(this.id).subscribe((response: APIResponse) => {
          if (response.success) {
            this.alertService.showAlert('Deleted!', `${this.room.room_type} was delete successfully`, 'success');
            this.router.navigate(['locations/rooms'])
          }
        });
      }
    })
  }

  public save() {
    this.alertService.showConfirm('Update Room?', 'This will save the changes you have made.', 'warning').then(result => {
      if (result.value) {
        this.loading = true;
        this.roomService.updateRoom(this.id, this.room).subscribe((response: APIResponse) => {
          this.alertService.showAlert('Success!', 'The room information was updated successfully!', 'success');
          this.getRoomById();
        });
      }
  })
  }

}
