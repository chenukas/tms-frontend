import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment.prod';
import { Works } from 'app/models/works.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  selectedWorks:Works;
  works: Works[];

  constructor(private http: HttpClient) {
    this.selectedWorks = new Works();
  }

  public addWork(works:Works) {
    return this.http.post(`${AppConfig.environment}/works`,works);
  }
  public viewWorks() {
    return this.http.get(`${AppConfig.environment}/works`);
  }
  public deleteWorks(_id:string) {
    return this.http.delete(`${AppConfig.environment}/works/${_id}`);
  }
  public editWorks(works:Works){
    return this.http.put(`${AppConfig.environment}/works/${works._id}`, works);
  }
  public viewWorkById(_id:string) {
    return this.http.get(`${AppConfig.environment}/works/${_id}`);
  }
  public viewWorkByTimeID(timeTableID:string) {
    return this.http.post(`${AppConfig.environment}/worksTimeTable`, {timeTableID});
  }

}
