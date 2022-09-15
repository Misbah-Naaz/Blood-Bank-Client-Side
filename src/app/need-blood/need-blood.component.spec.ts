import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedBloodComponent } from './need-blood.component';

describe('NeedBloodComponent', () => {
  let component: NeedBloodComponent;
  let fixture: ComponentFixture<NeedBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedBloodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
