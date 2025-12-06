import { Component } from '@angular/core';
import { Room, RoomList } from './iRooms';

@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'A/C, Free Wi-Fi, TV, Bathroom, Kitchen, Sauna',
      price: 500,
      photos:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f8/a3/5e/guest-room.jpg?w=1400&h=-1&s=1',
      checkinTime: new Date('11-Dec-2025'),
      checkoutTime: new Date('12-Dec-2025'),
    },
    {
      roomNumber: 2,
      roomType: 'Luxury Room',
      amenities: 'Room Service, Spa, A/C, Free Wi-Fi, TV, Bathroom, Kitchen, Terrace, Bar',
      price: 1000,
      photos:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f8/a3/5e/guest-room.jpg?w=1400&h=-1&s=1',
      checkinTime: new Date('11-Dec-2025'),
      checkoutTime: new Date('12-Dec-2025'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Personal Chef, A/C, Free Wi-Fi, TV, Bathroom, Kitchen, Sauna',
      price: 15000,
      photos:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f8/a3/5e/guest-room.jpg?w=1400&h=-1&s=1',
      checkinTime: new Date('11-Dec-2025'),
      checkoutTime: new Date('12-Dec-2025'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
