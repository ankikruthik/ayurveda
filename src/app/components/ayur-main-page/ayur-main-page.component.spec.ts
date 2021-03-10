import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurMainPageComponent } from './ayur-main-page.component';

describe('AyurMainPageComponent', () => {
  let component: AyurMainPageComponent;
  let fixture: ComponentFixture<AyurMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
