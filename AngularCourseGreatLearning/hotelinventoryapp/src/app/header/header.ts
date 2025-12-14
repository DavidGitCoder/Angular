import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  title: string = '';

  constructor() {}
  ngOnInit(): void {}
}
