import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  constructor(
    private http: HttpClient
  ) { }

  public createBatch(name,type) {
    return this.http.post(`${AppConfig.environment}/batches`,{name,type});
  }

  public viewBatches() {
    return this.http.get(`${AppConfig.environment}/batches`);
  }

  public viewBatchById(id) {
    return this.http.get(`${AppConfig.environment}/batches/${id}`);
  }

  public updateBatchById(id: string, batch) {
    return this.http.put(`${AppConfig.environment}/batches/${id}`, batch);
  }

  public deleteBatchById(id) {
    return this.http.delete(`${AppConfig.environment}/batches/${id}`);
  }


}
