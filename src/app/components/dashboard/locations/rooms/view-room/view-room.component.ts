import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'app/services/room.service';
import { AlertService } from 'app/services/alert.service';
import { Room } from 'app/models/room';
import { TileStyler } from '@angular/material/grid-list/tile-styler';
import { APIResponse } from 'app/models/apiresponse';
import { TagsService } from 'app/services/tags.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss']
})
export class ViewRoomComponent implements OnInit {

  private id: string;
  private room: Room;
  private loading: boolean;
  public tags: [];
  public roomTags = [];
  public selectedTag;

  public fromControl = new FormControl();
  public toControl = new FormControl();

  public uaTimes: MatTableDataSource<{ _id: string, from: Date, to: Date }>;
  minDate = Date.now();

  displayedColumns: string[] = ['from', 'to', 'actions'];


  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private alertService: AlertService,
    private tagService: TagsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getRoomById();
      this.loadAllTags();
    })
  }

  private loadAllTags() {
    this.tagService.viewTags().subscribe((response: APIResponse) => {
      this.tags = response.data;
    });
  }

  private getRoomById() {
    this.roomService.getRoomById(this.id).subscribe((response: APIResponse) => {
      this.room = response.data as Room;
      this.roomTags = this.room.tags.map(t => t._id);
      this.uaTimes = new MatTableDataSource<{ _id: string, from: Date, to: Date }>(this.room.unavailable);
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
    });
  }

  public updateRoomTags() {
    this.roomService.updateRoomTags(this.room._id, this.roomTags).subscribe((response: APIResponse) => {
      this.getRoomById();
    })
  }

  public addTag() {
    if (!this.selectedTag) {
      return;
    }
    this.roomTags.push(this.selectedTag);
    this.updateRoomTags();
  }

  public removeTag(_id: string) {
    this.roomTags = this.roomTags.filter(t => t !== _id);
    this.updateRoomTags();
  }

  public addUnavailableTime() {
    console.log(this.fromControl.value);
    console.log(this.toControl.value);
    this.roomService.addUnavailableTimeSlot(this.room._id, this.fromControl.value, this.toControl.value)
      .subscribe((response: APIResponse) => {
        this.getRoomById();
      });
  }

  public removeUnavailableTime(_id: string) {
    this.roomService.removeUnavailableTimeSlot(this.room._id, _id).subscribe((response: APIResponse) => {
      this.getRoomById();
    })
  } 

}
