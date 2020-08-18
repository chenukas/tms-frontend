import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubGroupsService {

  constructor(
    private http: HttpClient
  ) { }

  public createSubGroup(name) {
    return this.http.post(`${AppConfig.environment}/subgroups`, {name});
  }

  public viewSubGroups() {
   return this.http.get(`${AppConfig.environment}/subgroups`);
  }

  public viewSubGroupById(id) {
    return this.http.get(`${AppConfig.environment}/subgroups/${id}`);
  }

  public updateSubGroupById(id: string, subgroup) {
    return this.http.put(`${AppConfig.environment}/subgroups/${id}`, subgroup);
  }

  public deleteSubGroupById(id) {
    return this.http.delete(`${AppConfig.environment}/subgroups/${id}`);
  }
}
