import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  

  constructor(private roomsService: RoomsService) {
    console.log('constructor');
  }
  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }
 


  hotelName = 'Hilton Hotel';
  numberOfRooms = 100;

  rooms: Room = {
    availableRooms: 5,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent?:HeaderComponent;


  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectedRoom!: RoomList;
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 321,
      roomType: 'penthouse',
      amenities: '2 bathrooms',
      price: 2000,
      photos:
        'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      checkinTime: new Date('1-jan-2022'),
      checkoutTime: new Date('10-jan-2023'),
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
