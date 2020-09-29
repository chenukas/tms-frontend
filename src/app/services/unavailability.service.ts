import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UnavailabilityService {

  constructor(
    private http: HttpClient
  ) { }

  public addBatchUnavailability(batchId, day, startTime, endTime) {
    return this.http.post(`${AppConfig.environment}/nabatch`,{batchId,day,startTime,endTime});
  }

  public addLecturerUnavailability(lecturerId, day, startTime, endTime) {
    return this.http.post(`${AppConfig.environment}/nalecturer`,{lecturerId,day,startTime,endTime});
  }

  public addSessionUnavailability(sessionId, day, startTime, endTime) {
    return this.http.post(`${AppConfig.environment}/nasession`,{sessionId,day,startTime,endTime});
  }
}
