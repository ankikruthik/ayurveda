import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedaHomeComponent } from './ayurveda-home.component';

describe('AyurvedaHomeComponent', () => {
  let component: AyurvedaHomeComponent;
  let fixture: ComponentFixture<AyurvedaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurvedaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
