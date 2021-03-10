import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurCopyrightComponent } from './ayur-copyright.component';

describe('AyurCopyrightComponent', () => {
  let component: AyurCopyrightComponent;
  let fixture: ComponentFixture<AyurCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurCopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
