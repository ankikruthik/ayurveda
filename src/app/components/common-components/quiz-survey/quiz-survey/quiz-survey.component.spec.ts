import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSurveyComponent } from './quiz-survey.component';

describe('QuizSurveyComponent', () => {
  let component: QuizSurveyComponent;
  let fixture: ComponentFixture<QuizSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
