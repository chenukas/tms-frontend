import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';
import { Lecturer } from '../models/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  constructor(
    private http: HttpClient
  ) { }

  public addLecturers(lecturer: Lecturer) {
    return this.http.post(`${AppConfig.environment}/lecturers`, lecturer);
  }

  public viewLecturers() {
    return this.http.get(`${AppConfig.environment}/lecturers`);
  }

  public viewLecturerById(id) {
    return this.http.get(`${AppConfig.environment}/lecturers/${id}`);
  }

  public updateLecturers(id: string, lecturer) {
    return this.http.put(`${AppConfig.environment}/lecturers`, lecturer);
  }

  public deleteLecturer(id) {
    return this.http.delete(`${AppConfig.environment}/lecturers/${id}`);
  }

}
