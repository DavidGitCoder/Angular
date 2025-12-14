import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../iRooms';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
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
      rating: 4,
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
      rating: 5,
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
      rating: 5,
    },
    {
      roomNumber: 4,
      roomType: 'Standard Room',
      amenities: 'A/C, Free Wi-Fi, TV, Bathroom',
      price: 150,
      photos:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f8/a3/5e/guest-room.jpg?w=1400&h=-1&s=1',
      checkinTime: new Date('11-Dec-2025'),
      checkoutTime: new Date('12-Dec-2025'),
      rating: 3.5,
    },
  ];
  constructor() {
    // console.log(config.apiEndpoint);
    console.log('Rooms Service intialized...');
  }
  getRooms(): RoomList[] {
    return this.roomList;
  }
}
