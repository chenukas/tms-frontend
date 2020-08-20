import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllRooms() {
    return this.http.get(`${AppConfig.environment}/rooms`);
  }

  public getRoomById(id: string) {
    return this.http.get(`${AppConfig.environment}/rooms/${id}`);
  }

  public createRoomInBuilding(building_id, room_name, room_type) {
    return this.http.post(`${AppConfig.environment}/buildings/${building_id}/rooms`, {room_name, room_type});
  }

  public deleteRoom(id: string) {
    return this.http.delete(`${AppConfig.environment}/rooms/${id}`);
  }

}
