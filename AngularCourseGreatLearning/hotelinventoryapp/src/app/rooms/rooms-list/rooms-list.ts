import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../iRooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // const currentValue: string = changes['title'].currentValue;
    // const prevValue: string = changes['title'].previousValue;
    //console.log(currentValue + '-' + prevValue);

    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  ngOnDestroy(): void {
    console.log('RoomList: OnDestroy is called!!!!!');
  }
}
