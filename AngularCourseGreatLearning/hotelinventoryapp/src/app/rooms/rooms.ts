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
  Self,
} from '@angular/core';
import { Room, RoomList } from './iRooms';
import { RoomsListComponent } from './rooms-list/rooms-list';
// '../../../node_modules/@angular/common/types/_common_module-chunk';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { RoomsService } from './services/rooms';
import { Observable } from 'rxjs';
import { signal } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'hinv-rooms',
  imports: [RoomsListComponent, CommonModule, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  // providers: [RoomsService], >-- used for an instance for that component, leave it out if you only need a single instance at the root
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  title = 'Room List';

  selectedRoom!: RoomList; // ! means it doesn't have to be initialized yet

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList = signal<RoomList[]>([]);

  totalBytes = signal<number>(0);

  //Observable
  // stream = new Observable<string>((observer) => {
  //   observer.next('user1');
  //   observer.next('user2');
  //   observer.next('user3');
  //   observer.complete();
  //   observer.error('observable error');
  // });

  @ViewChild(Header, { static: true }) headerComponent!: Header;
  // @ViewChildren(Header) headerChildrenComponent!: QueryList<Header>;

  constructor(private roomsService: RoomsService) {}

  ngOnDestroy(): void {
    console.log('Rooms: OnDestroy is called!!!!!');
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngOnInit(): void {
    this.headerComponent.title = 'WELCOME TO HOTEL CALIFORNIA!';
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('complete'),
    // });
    // this.stream.subscribe((data) => console.log(data));

    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList.set(rooms);
    });

    //example of a http request
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes.set(event.loaded);

          console.log(this.totalBytes());
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
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
      roomNumber: (this.roomList.length + 1).toString(),
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
    // this.roomList = [...this.roomList, room]; //immutability: keep the existing object and add the updated part
    this.roomsService.addRoom(room).subscribe((room: RoomList[]) => this.roomList.set(room));
  }

  updateRoom() {
    const room: RoomList = {
      roomNumber: '2',
      roomType: 'Extra Deluxe Room',
      amenities: 'A/C, Free Wi-Fi, TV, Large Bathroom, Kitchen, Sauna',
      price: 999,
      photos:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f8/a3/5e/guest-room.jpg?w=1400&h=-1&s=1',
      checkinTime: new Date('11-Dec-2025'),
      checkoutTime: new Date('12-Dec-2025'),
      rating: 1.5,
    };
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room]; //immutability: keep the existing object and add the updated part
    this.roomsService.updateRoom(room).subscribe((data) => this.roomList.set(data));
  }

  deleteRoom() {
    this.roomsService.deleteRoom('2').subscribe((room: RoomList[]) => {
      console.log(room);

      this.roomList.set(room);
    });
  }
}
