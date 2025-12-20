import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms-booking',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './rooms-booking.html',
  styleUrl: './rooms-booking.scss',
})
export class RoomsBooking implements OnInit {
  private router = inject(ActivatedRoute);

  id?: number;
  id$?: Observable<void> = this.router.paramMap.pipe(map((params) => {
      params.get('id')
    }));
  // params$ = new Observable();

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    // this.id$ = this.router.params.pipe(map((params) => Number(params['id'])));
    // this.router.paramMap.subscribe((params) => {
    //   params.get('id');
    });
  }
}
