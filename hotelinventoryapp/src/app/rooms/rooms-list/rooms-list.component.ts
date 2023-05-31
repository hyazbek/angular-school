import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {

  @Output() roomSelected = new EventEmitter<RoomList>();
  @Input() rooms: RoomList[] = [];

  selectRoom(room: RoomList){
    this.roomSelected.emit(room);
  }
}
