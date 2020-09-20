import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SessionsService } from "app/services/sessions.service";
import { MatSort } from "@angular/material/sort";

interface APIResponse {
  success: boolean;
  data: any;
}

@Component({
  selector: "app-manage-sessions",
  templateUrl: "./manage-sessions.component.html",
  styleUrls: ["./manage-sessions.component.scss"],
})
export class ManageSessionsComponent implements OnInit {
  displayedColumns = [
    "selectedLecName",
    "selectedSubName",
    "selectedTag",
    "selectedGroup",
    "studentCount",
    "duration",
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private sessionsService: SessionsService) {}

  ngOnInit(): void {
    this.viewAllSessions();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewAllSessions() {
    this.sessionsService.viewSessions().subscribe((res: APIResponse) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.sort = this.sort;
    });
  }
}
