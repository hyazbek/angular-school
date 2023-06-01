import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Output() roomSelected = new EventEmitter<RoomList>();
  @Input() rooms: RoomList[] = [];

  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }
}
