import { Component, OnInit } from "@angular/core";
import { SessionsService } from "app/services/sessions.service";
import { LecturersService } from "app/services/lecturers.service";
import { SubjectsService } from "app/services/subjects.service";
import { TagsService } from "app/services/tags.service";
import { BatchesService } from "app/services/batches.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

interface APIResponse {
  success: boolean;
  data: any;
}

@Component({
  selector: "app-add-session",
  templateUrl: "./add-session.component.html",
  styleUrls: ["./add-session.component.scss"],
})
export class AddSessionComponent implements OnInit {
  public lecturers: [];
  public subjects: [];
  public tags: [];
  public maingroups: [];
  public subgroups: [];
  //public batches: [];

  public selectedLecturer: string;
  public selectedSubject: string;
  public selectedTag: string;
  public selectedGroup: string;
  //public selectedBatch: string;
  public studentCount: string;
  public duration: string;
  public id: string;
  public isOnUpdate: boolean;

  constructor(
    private sessionsService: SessionsService,
    private lecturersService: LecturersService,
    private subjectsService: SubjectsService,
    private tagsService: TagsService,
    private batchesService: BatchesService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.viewAllLecturers();
    this.viewAllSubjects();
    this.viewAllMainGroups();
    this.viewAllSubGroups();
    this.viewAllTags();

    this.selectedLecturer = "";
    this.selectedSubject = "";
    this.selectedTag = "";
    this.selectedGroup = "";
    //this.selectedBatch = "";
    this.studentCount = "";
    this.duration = "";

    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.sessionsService
          .viewSessionsById(params.id)
          .subscribe((res: { data: any }) => {
            this.id = params.id;
            this.selectedLecturer = res.data.selectedLecturer;
            this.selectedSubject = res.data.selectedSubject;
            this.selectedTag = res.data.selectedTag;
            this.selectedGroup = res.data.selectedGroup;
            //this.selectedBatch = res.data.selectedBatch;
            this.studentCount = res.data.studentCount;
            this.duration = res.data.duration;
            this.isOnUpdate = true;
          });
      }
    });
  }

  createSession() {
    this.sessionsService
      .addSession(
        this.selectedLecturer,
        this.selectedSubject,
        this.selectedTag,
        this.selectedGroup,
        this.studentCount,
        this.duration
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.snackbar.open("Session Details Are Successfully Added", "", {
            duration: 2000,
          });
        },
        (err) => {
          this.snackbar.open("Creation Is Unsuccessful", "", {
            duration: 2000,
          });
          console.log(err.message);
        }
      );

    this.clear();
  }

  updateSession() {
    this.sessionsService
      .updateSessionsById(this.id, {
        selectedLecturer: this.selectedLecturer,
        selectedSubject: this.selectedSubject,
        selectedTag: this.selectedTag,
        selectedMainGroup: this.selectedGroup,
        //selectedBatch: this.selectedBatch,
        studentCount: this.studentCount,
        duration: this.duration,
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.snackbar.open("Session details are successfully updated", null, {
            duration: 2000,
          });
          this.router.navigate(["/sessions/manage"]);
        },
        (err) => {
          this.snackbar.open("Unsuccessfull", null, { duration: 2000 });
          console.log(err.message);
        }
      );
  }

  clear() {
    this.selectedLecturer = "";
    this.selectedSubject = "";
    this.selectedTag = "";
    this.selectedGroup = "";
    //this.selectedBatch = "";
    this.studentCount = "";
    this.duration = "";
  }

  viewAllLecturers() {
    this.lecturersService.viewLecturers().subscribe((res: { data: any }) => {
      this.lecturers = res.data;
    });
  }

  viewAllSubjects() {
    this.subjectsService.viewSubjects().subscribe((res: { data: any }) => {
      this.subjects = res.data;
    });
  }

  viewAllTags() {
    this.tagsService.viewTags().subscribe((res: { data: any }) => {
      this.tags = res.data;
    });
  }

  viewAllMainGroups() {
    this.batchesService.viewMainGroups().subscribe((res: { data: any }) => {
      this.maingroups = res.data;
    });
  }

  viewAllSubGroups() {
    this.batchesService.viewSubGroups().subscribe((res: { data: any }) => {
      this.subgroups = res.data;
    });
  }
}
