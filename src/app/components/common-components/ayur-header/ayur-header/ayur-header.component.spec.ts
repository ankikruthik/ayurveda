import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurHeaderComponent } from './ayur-header.component';

describe('AyurHeaderComponent', () => {
  let component: AyurHeaderComponent;
  let fixture: ComponentFixture<AyurHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
