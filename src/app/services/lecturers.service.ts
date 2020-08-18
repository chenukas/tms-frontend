import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LecturersService {

  constructor(
    private http: HttpClient
  ) { }


  public getLecturerId(id: string){
    return this.http.get(`${AppConfig.environment}/lecturers/${id}`);
  }

  public addLecturer(empid, fname, lname, email, faculty, department, center, building, level) {
    return this.http.post(`${AppConfig.environment}/lecturers`, {empid, fname, lname, email, faculty, department, center, building, level});
  }

  public viewLecturers() {
    return this.http.get(`${AppConfig.environment}/lecturers`);
  }

  public viewLecturerById(id) {
    return this.http.get(`${AppConfig.environment}/lecturers/${id}`);
  }

  public updateLecturerById(id: string, lecturer) {
    return this.http.put(`${AppConfig.environment}/lecturers/${id}`, lecturer);
  }

  public deleteLecturerById(id) {
    return this.http.delete(`${AppConfig.environment}/lecturers/${id}`);
  }

}
