import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 100;
  rooms: Room = {
    availableRooms : 0,
    bookedRooms : 5,
    totalRooms : 20,
  };

  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
