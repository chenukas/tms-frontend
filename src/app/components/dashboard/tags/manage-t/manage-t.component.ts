import { Component, OnInit } from '@angular/core';
import { TagsService } from 'app/services/tags.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

interface APIResponse {
  success: boolean,
  data: any
}

@Component({
  selector: 'app-manage-t',
  templateUrl: './manage-t.component.html',
  styleUrls: ['./manage-t.component.scss']
})
export class ManageTComponent implements OnInit {
  public id: string;
  public name: String;
  public isOnUpdate: boolean;

  displayedColumns = ['name','action'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private tagsService: TagsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.name = '';

    this.viewAllTags();

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.tagsService.viewTagById(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.name = res.data.name;
          this.isOnUpdate = true;
        });
      }
    });
  }

  viewAllTags() {
    this.tagsService.viewTags().subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource(response.data);
    });
  }

  createTag() {
    this.tagsService.createTag(this.name).subscribe(response => {
      console.log(response);
      this.viewAllTags();
    }, err => {
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.name = '';
  }

  updateTag() {
    this.tagsService.updateTagById(
      this.id,
      {
        name: this.name
      }
    ).subscribe(response => {
      console.log(response);
      this.isOnUpdate = false;
      this.router.navigate(['/tags/manage']);
      this.clear();
      this.viewAllTags();
    }, err => {
      console.log(err.message);
    });
  }

  navigateUpdateTag(id: String) {
    this.router.navigate(['/tags/manage'], {queryParams: {id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTag(_id);
      }
    });
  }

  deleteTag(id: String) {
    this.tagsService.deleteTagById(id).subscribe(response => {
      console.log(response);
      this.viewAllTags();
    }, err => {
      console.log(err.message);
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox.html',
})
export class DeleteDialogBox {
  constructor() {}

  public deleteTag() {}

}