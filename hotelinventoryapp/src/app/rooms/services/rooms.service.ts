import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }
  roomList: RoomList []= [
    {
      roomNumber: 111,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, wifi, tv, bathroom',
      price: 500,
      photos:
        'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 211,
      roomType: 'Regular Room',
      amenities: 'Air Conditioner, bathroom',
      price: 200,
      photos:
        'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime: new Date('16-Nov-2021'),
    },
    {
      roomNumber: 311,
      roomType: 'Mini Room',
      amenities: 'Air Conditioner',
      price: 100,
      photos:
        'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('21-Nov-2021'),
    },
  ];
  getRooms(){
    return this.roomList;
  }
}
