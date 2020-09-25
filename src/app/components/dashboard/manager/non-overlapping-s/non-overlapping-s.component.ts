import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'app/services/subjects.service';
import { MatTableDataSource } from '@angular/material/table';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-non-overlapping-s',
  templateUrl: './non-overlapping-s.component.html',
  styleUrls: ['./non-overlapping-s.component.scss']
})
export class NonOverlappingSComponent implements OnInit {

  displayedColumns = ['subCode', 'subName', 'action'];
  dataSource : MatTableDataSource< any >;
  public noolapping: Boolean;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.noolapping  = false;
    this.viewAllNonParallelSubjects();
  }

  viewAllNonParallelSubjects() {
    this.subjectsService.viewNonParallelSubjects().subscribe((res: APIResponse) => {
      this.dataSource = new MatTableDataSource ( res.data ); 
    });
  }

  updateSubjectNoolapping(subject: any) {
    this.noolapping = true;
    this.subjectsService.updateSubjectNoolappingById(subject._id,this.noolapping).subscribe(response => {
      console.log(response);
      this.viewAllNonParallelSubjects();
      
    }, err => {
      console.log(err.message);
    });

  }

}
