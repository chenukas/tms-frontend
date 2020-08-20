import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.scss']
})
export class AddNewBuildingComponent implements OnInit {

  public building_name: string;

  constructor(
    public dialogRef: MatDialogRef<AddNewBuildingComponent>
  ) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public addNewBuilding() {
    this.dialogRef.close(this.building_name);
  }

}
