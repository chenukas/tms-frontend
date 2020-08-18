import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(
    private http: HttpClient
  ) { }

  public addBuilding(bname) {
    return this.http.post(`${AppConfig.environment}/buildings`, {bname});
  }

  public getAllBuildings() {
    return this.http.get(`${AppConfig.environment}/buildings`);
  }

  public viewBuilding(id) {
    return this.http.get(`${AppConfig.environment}/buildings/${id}`);
  }
}
