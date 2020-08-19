import { BaseEntity } from "./base-entity";
import { Room } from "./room";

export class Building extends BaseEntity {
    building_name: string;
    rooms: Room[];
}