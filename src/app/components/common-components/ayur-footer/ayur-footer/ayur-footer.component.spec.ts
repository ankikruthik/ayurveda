import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurFooterComponent } from './ayur-footer.component';

describe('AyurFooterComponent', () => {
  let component: AyurFooterComponent;
  let fixture: ComponentFixture<AyurFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
