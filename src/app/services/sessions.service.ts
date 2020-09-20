import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class SessionsService {
  constructor(private http: HttpClient) {}

  public addSession(
    selectedLecturer,
    selectedSubject,
    selectedTag,
    selectedGroup,
    studentCount,
    duration
  ) {
    return this.http.post(`${AppConfig.environment}/sessions`, {
      selectedLecturer,
      selectedSubject,
      selectedTag,
      selectedGroup,
      studentCount,
      duration,
    });
  }

  public viewSessions() {
    return this.http.get(`${AppConfig.environment}/sessions`);
  }

  public viewSessionsById(id) {
    return this.http.get(`${AppConfig.environment}/sessions/${id}`);
  }

  public updateSessionsById(id: string, Session) {
    return this.http.put(`${AppConfig.environment}/sessions/${id}`, Session);
  }

  public deleteSessionsById(id) {
    return this.http.delete(`${AppConfig.environment}/sessions/${id}`);
  }
}
