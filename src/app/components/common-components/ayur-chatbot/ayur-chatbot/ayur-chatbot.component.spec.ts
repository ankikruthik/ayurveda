import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurChatbotComponent } from './ayur-chatbot.component';

describe('AyurChatbotComponent', () => {
  let component: AyurChatbotComponent;
  let fixture: ComponentFixture<AyurChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurChatbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
