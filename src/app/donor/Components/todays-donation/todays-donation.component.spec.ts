import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysDonationComponent } from './todays-donation.component';

describe('TodaysDonationComponent', () => {
  let component: TodaysDonationComponent;
  let fixture: ComponentFixture<TodaysDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
