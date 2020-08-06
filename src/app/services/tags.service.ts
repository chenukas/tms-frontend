import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private http: HttpClient
  ) { }

  public createTag(name) {
    return this.http.post(`${AppConfig.environment}/tags`,{name});
  }

  public viewTags() {
    return this.http.get(`${AppConfig.environment}/tags`);
  }

  public viewTagById(id) {
    return this.http.get(`${AppConfig.environment}/tags/${id}`);
  }

  public updateTagById(id: string, tag) {
    return this.http.put(`${AppConfig.environment}/tags/${id}`, tag);
  }

  public deleteTagById(id) {
    return this.http.delete(`${AppConfig.environment}/tags/${id}`);
  }

}
