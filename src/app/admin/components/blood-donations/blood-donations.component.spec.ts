import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationsComponent } from './blood-donations.component';

describe('BloodDonationsComponent', () => {
  let component: BloodDonationsComponent;
  let fixture: ComponentFixture<BloodDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
