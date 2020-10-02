import { Component, OnInit, Inject } from '@angular/core';
import { TagsService } from 'app/services/tags.service';
import { RoomService } from 'app/services/room.service';
import { APIResponse } from 'app/models/apiresponse';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectsService } from 'app/services/subjects.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-preferred-locations',
  templateUrl: './manage-preferred-locations.component.html',
  styleUrls: ['./manage-preferred-locations.component.scss']
})
export class ManagePreferredLocationsComponent implements OnInit {

  public tags: [];
  public rooms: [];
  public preferredRooms: {room: string, tag: string}[];
  public subject;
  public roomId: string;
  public tagId: string;
  public datasource: MatTableDataSource<any>;
  displayedColumns = ['room', 'tag', 'action'];


  constructor(
    private tagService: TagsService,
    private roomService: RoomService,
    private dialogRef: MatDialogRef<ManagePreferredLocationsComponent>,
    private subjectService: SubjectsService,
    @Inject(MAT_DIALOG_DATA) public data: { subjectId: string }
  ) { }

  ngOnInit(): void {
    this.loadAllRooms();
    this.loadAllTags();
    this.loadSubjectById();
    this.preferredRooms = [];
  }

  public loadAllTags() {
    this.tagService.viewTags().subscribe((response: APIResponse) => {
      this.tags = response.data;
    });
  }

  public loadAllRooms() {
    this.roomService.getAllRooms().subscribe((response: APIResponse) => {
      this.rooms = response.data;
    })
  }

  private loadSubjectById() {
    this.subjectService.getSubjectId(this.data.subjectId).subscribe((response: APIResponse) => {
      this.subject = response.data;
      this.preferredRooms = this.subject.preferred_rooms.map(r => { return { room: r.room._id, tag: r.tag._id }});
      this.datasource = new MatTableDataSource(response.data.preferred_rooms);
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public addPreferredRoom() {
    const roomObject = { room: this.roomId, tag: this.tagId };
    this.preferredRooms.push(roomObject);
    this.preferredRooms = this.preferredRooms.filter((value, index, arr) => arr.indexOf(value) === index);
    this.updatePreferredRooms();
  }

  public removePreferredRoom(room: string, tag: string) {
    this.preferredRooms = this.preferredRooms.filter(value => !(value.room === room && value.tag === tag));
    this.updatePreferredRooms();
  }

  public updatePreferredRooms() {
    this.subjectService.updatePreferredRooms(this.data.subjectId, this.preferredRooms).subscribe((response: APIResponse) => {
      this.loadSubjectById();
    });
  }

}
