import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YearSemsService {

  constructor(
    private http: HttpClient
  ) { }

  public createYearSem(name) {
    return this.http.post(`${AppConfig.environment}/yearsems`,{name});
  }

  public viewYearSems() {
    return this.http.get(`${AppConfig.environment}/yearsems`);
  }

  public viewYearSemById(id) {
    return this.http.get(`${AppConfig.environment}/yearsems/${id}`);
  }

  public updateYearSemById(id: string, tag) {
    return this.http.put(`${AppConfig.environment}/yearsems/${id}`, tag);
  }

  public deleteYearSemById(id) {
    return this.http.delete(`${AppConfig.environment}/yearsems/${id}`);
  }
}
