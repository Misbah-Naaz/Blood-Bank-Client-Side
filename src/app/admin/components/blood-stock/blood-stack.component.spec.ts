import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodStackComponent } from './blood-stack.component';

describe('BloodStackComponent', () => {
  let component: BloodStackComponent;
  let fixture: ComponentFixture<BloodStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
