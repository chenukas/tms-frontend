import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'app/services/subjects.service';
import { MatTableDataSource } from '@angular/material/table';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-parallel-s',
  templateUrl: './parallel-s.component.html',
  styleUrls: ['./parallel-s.component.scss']
})
export class ParallelSComponent implements OnInit {

  displayedColumns = ['subCode', 'subName', 'action'];
  dataSource : MatTableDataSource< any >;
  public parallel: Boolean;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.parallel = false;
    this.viewAllCanOverlappingSubjects();
  }

  viewAllCanOverlappingSubjects() {
    this.subjectsService.viewCanOverlappingSubjects().subscribe((res: APIResponse) => {
      this.dataSource = new MatTableDataSource ( res.data ); 
    })
  }

  updateSubjectParallel(subject: any) {
    this.parallel = true;
    this.subjectsService.updateSubjectParallelById(subject._id,this.parallel).subscribe(response => {
      console.log(response);
      this.viewAllCanOverlappingSubjects();
      
    }, err => {
      console.log(err.message);
    });

  }

}
