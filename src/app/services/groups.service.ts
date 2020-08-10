import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(
    private http: HttpClient
  ) { }

  public createGroup(name) {
    return this.http.post(`${AppConfig.environment}/groups`, {name});
  }

  public viewGroups() {
   return this.http.get(`${AppConfig.environment}/groups`);
  }

  public viewGroupById(id) {
    return this.http.get(`${AppConfig.environment}/groups/${id}`);
  }

  public updateGroupById(id: string, group) {
    return this.http.put(`${AppConfig.environment}/groups/${id}`, group);
  }

  public deleteGroupById(id) {
    return this.http.delete(`${AppConfig.environment}/groups/${id}`);
  }
}
