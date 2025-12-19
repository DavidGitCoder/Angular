import { Inject, Injectable, inject } from '@angular/core';
import { Room, RoomList } from '../iRooms';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];

  private http = inject(HttpClient);
  // headers = new HttpHeaders({ token: '12345WhatsUp', mickey: 'mouse', donald: 'duck' });
  getRoom$ = this.http.get<RoomList[]>('api/rooms').pipe(shareReplay(1));

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    // console.log(this.config.apiEndpoint);
    console.log('Rooms Service intialized...');
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('api/rooms', room);
  }
  updateRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(roomNumber: string) {
    return this.http.delete<RoomList[]>(`api/rooms/${roomNumber}`);
  }
  //example of a http request
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
