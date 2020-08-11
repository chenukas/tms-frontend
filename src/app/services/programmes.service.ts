import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgrammesService {

  constructor(
    private http: HttpClient
  ) { }

  public createProgramme(name) {
    return this.http.post(`${AppConfig.environment}/programmes`, {name});
  }

  public viewProgrammes() {
    return this.http.get(`${AppConfig.environment}/programmes`);
  }

  public viewProgrammeById(id) {
    return this.http.get(`${AppConfig.environment}/programmes/${id}`);
  }

  public updateProgrammeById(id: string, programme) {
    return this.http.put(`${AppConfig.environment}/programmes/${id}`, programme);
  }

  public deleteProgrammeById(id) {
    return this.http.delete(`${AppConfig.environment}/programmes/${id}`);
  }
}
