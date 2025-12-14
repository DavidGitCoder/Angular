import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './iRooms';
import { RoomsListComponent } from './rooms-list/rooms-list';
// '../../../node_modules/@angular/common/types/_common_module-chunk';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { RoomsService } from './services/rooms';

@Component({
  selector: 'hinv-rooms',
  imports: [RoomsListComponent, CommonModule, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title = 'Room List';

  selectedRoom!: RoomList; // ! means it doesn't have to be initialized yet

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  @ViewChild(Header, { static: true }) headerComponent!: Header;
  // @ViewChildren(Header) headerChildrenComponent!: QueryList<Header>;

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnDestroy(): void {
    console.log('Rooms: OnDestroy is called!!!!!');
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngOnInit(): void {
    this.headerComponent.title = 'WELCOME TO HOTEL CALIFORNIA!';
    this.roomList = this.roomsService.getRooms();
  }
  ngAfterViewInit(): void {
    //console.log(this.headerComponent);
    // this.headerChildrenComponent.forEach((headerCompChild) => {
    //   headerCompChild.title = "Bienvenue à l'Hôtel Californie ";
    // });
    // this.headerChildrenComponent.last.title = 'Aloha!';
  }
  ngAfterViewChecked(): void {}
  toggle() {
    this.hideRooms = !this.hideRooms;
    // this.hideRooms ? (this.title = 'ROOM LIST') : (this.title = 'Room List');
    this.title = 'ROOM LIST';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: this.roomList.length + 1,
      roomType: 'Suite',
      amenities: 'A/C, Free Wi-Fi, TV, Large Bathroom, Kitchen, Sauna',
      price: 750,
      photos:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f8/a3/5e/guest-room.jpg?w=1400&h=-1&s=1',
      checkinTime: new Date('11-Dec-2025'),
      checkoutTime: new Date('12-Dec-2025'),
      rating: 4.5,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]; //immutability: keep the existing object and add the updated part
  }
}
