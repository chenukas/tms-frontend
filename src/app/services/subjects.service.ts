import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SubjectsService {

  constructor(
    private http: HttpClient
  ) { }

      public getSubjectId(id: string){
        return this.http.get(`${AppConfig.environment}/subjects/${id}`);
      }
    
      public addSubject(year, semester, name, code, lechours, tutehours, labhours, evahours) {
        return this.http.post(`${AppConfig.environment}/subjects`, {year, semester, name, code, lechours, tutehours, labhours, evahours});
      }
    
      public viewSubjects() {
        return this.http.get(`${AppConfig.environment}/subjects`);
      }
    
      public viewSubjectById(id) {
        return this.http.get(`${AppConfig.environment}/subjects/${id}`);
      }
    
      public updateSubjectById(id: string, subject) {
        return this.http.put(`${AppConfig.environment}/subjects/${id}`, subject);
      }
    
      public deleteSubjectById(id) {
        return this.http.delete(`${AppConfig.environment}/subjects/${id}`);
      }  

      public updateSubjectParallelById(id: string, parallel: Boolean) {
        return this.http.put(`${AppConfig.environment}/subjects/${id}/parallel`,parallel);
      }

      public viewCanOverlappingSubjects() {
        return this.http.get(`${AppConfig.environment}/olsubjects`);
      }

      public updateSubjectNoolappingById(id: string, noolapping: Boolean) {
        return this.http.put(`${AppConfig.environment}/subjects/${id}/noolapping`,noolapping);
      }

      public viewNonParallelSubjects() {
        return this.http.get(`${AppConfig.environment}/npsubjects`);
      }

      public updatePreferredRooms(subjectId: string, preferred_rooms: {room: string, tag: string}[]) {
        return this.http.put(`${AppConfig.environment}/subjects/${subjectId}/preferred_rooms`, { preferred_rooms });
      }
}