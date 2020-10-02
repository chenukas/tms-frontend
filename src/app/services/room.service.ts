import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';
import { Room } from 'app/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  selectedRoom:Room;
  room : Room[];

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

  public updateRoom(id: string, room: Room) {
    return this.http.put(`${AppConfig.environment}/rooms/${id}`, { room_name: room.room_name, room_type: room.room_type });
  }

  public deleteRoom(id: string) {
    return this.http.delete(`${AppConfig.environment}/rooms/${id}`);
  }

}
