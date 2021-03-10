import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheScienceOfAyurvedaComponent } from './the-science-of-ayurveda.component';

describe('TheScienceOfAyurvedaComponent', () => {
  let component: TheScienceOfAyurvedaComponent;
  let fixture: ComponentFixture<TheScienceOfAyurvedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheScienceOfAyurvedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheScienceOfAyurvedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
