import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAdd } from './rooms-add';

describe('RoomsAdd', () => {
  let component: RoomsAdd;
  let fixture: ComponentFixture<RoomsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
