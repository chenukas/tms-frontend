import { Injectable } from '@angular/core';
import { SlotsAndSession } from './../models/slots-and-session.model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SlotsAndSessionService {

  selectedSlotsAndSession:SlotsAndSession;
  slotsAndSession: SlotsAndSession[];

  constructor(private http: HttpClient) {
    this.selectedSlotsAndSession = new SlotsAndSession();
  }

  public addSlotsAndSession(selectedSlotsAndSession:SlotsAndSession) {
    return this.http.post(`${AppConfig.environment}/slots`,selectedSlotsAndSession);
  }
  public viewSlotsAndSession() {
    return this.http.get(`${AppConfig.environment}/slots`);
  }
  public deleteSlotsAndSession(_id:string) {
    return this.http.delete(`${AppConfig.environment}/slots/${_id}`);
  }
}
