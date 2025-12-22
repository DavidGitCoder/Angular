import { Component, inject, signal } from '@angular/core';
import { RoomList } from '../iRooms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { RoomsService } from '../services/rooms';

@Component({
  selector: 'hinv-rooms-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './rooms-add.html',
  styleUrl: './rooms-add.scss',
})
export class RoomsAdd {
  private router = inject(ActivatedRoute);
  private roomService = inject(RoomsService);
  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  successMessage = signal<string>('');
  toDateTimeLocal(date: Date): string {
    return date.toISOString().slice(0, 16);
  }
  AddRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage.set('Room Added Successfully');
      roomsForm.reset();
    });
  }
}
