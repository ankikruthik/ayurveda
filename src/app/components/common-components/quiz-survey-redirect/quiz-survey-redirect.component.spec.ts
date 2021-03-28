import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSurveyRedirectComponent } from './quiz-survey-redirect.component';

describe('QuizSurveyRedirectComponent', () => {
  let component: QuizSurveyRedirectComponent;
  let fixture: ComponentFixture<QuizSurveyRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSurveyRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSurveyRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
