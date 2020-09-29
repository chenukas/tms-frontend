import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConsecutiveSService {

  constructor(
    private http: HttpClient
  ) { }

  public addConsecutiveS(session1,session2) {
    return this.http.post(`${AppConfig.environment}/csessions`, {session1,session2});
  }
  
}
