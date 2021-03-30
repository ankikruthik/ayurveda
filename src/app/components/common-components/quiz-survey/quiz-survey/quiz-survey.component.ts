import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import *  as  data from 'src/app/Json/AyurvedaSurvey.json';
import * as _ from "lodash";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionHelper } from 'src/app/core/session.helper';

@Component({
  selector: 'app-quiz-survey',
  templateUrl: './quiz-survey.component.html',
  styleUrls: ['./quiz-survey.component.css']
})
export class QuizSurveyComponent implements OnInit {
  surveyQuestions: any = [];
  question: any;
  nextQuestion: any;
  surveyForm: FormGroup;
  questionControl: FormControl;
  userName: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private _changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private sessionHelper: SessionHelper
  ) {

  }

  ngOnInit(): void {
    //clearTimeout(5000);
    this.surveyForm = this.formBuilder.group({
      questionControl: ['', [Validators.required]]
    });
    this.route.params.subscribe(params => {
      this.nextQuestion = params['question'];
      if (this.nextQuestion) {
        this.getQuestions();
        this.getNextQuestion(this.nextQuestion);
        this.userName = this.sessionHelper.get(this.question.QuestionPath);
        if (this.question?.QuestionType == "Html") {
          this.sessionHelper.set("clearTimeout", false);
          setTimeout(() => {
            if (this.sessionHelper.get("clearTimeout") == false)            {
            this.router.navigate(["/ayurveda/quiz-survey-redirect", this.question?.NextQuestion]);

            }
          }, 3000);  //5s
        }
      }
    });
    if (this.question.QuestionType == "TextBox") {
      this.surveyForm.controls["questionControl"].patchValue(this.sessionHelper.get(this.question.QuestionPath));
    }
    this._changeDetector.markForCheck();
  }
  getQuestions() {
    this.surveyQuestions = (data as any).default;
  }
  getNextQuestion(questionPath) {
    this.question = _.filter(this.surveyQuestions.Question, q => q.QuestionPath == questionPath)[0];
    if (this.question.QuestionPath == "MeetYou") {
      var previousQuestion = _.filter(this.surveyQuestions.Question, q => q.NextQuestion == this.question.QuestionPath)[0];
      this.question.QuestionName = this.question.QuestionName.replace("{{userName}}", this.sessionHelper.get(previousQuestion.QuestionPath));
    }
  }
  patchFormForModal(form: FormGroup, data: Object) {
    Object.keys(form.controls).forEach((formControl: any) => {
      if (form.controls.hasOwnProperty(formControl)) {
        form.controls[formControl].patchValue(data[formControl]);
      }
    });
  }
  Next(id) {
    switch (this.question.QuestionType) {
      case "TextBox":
        this.userName = this.surveyForm.value.questionControl;
        this.sessionHelper.removeItem(this.question.QuestionPath);
        this.sessionHelper.set(this.question.QuestionPath, this.surveyForm.value.questionControl)
        this._changeDetector.markForCheck();
        this.surveyForm.controls["questionControl"].patchValue('');
        break;
      case "Emoji":
        this.sessionHelper.set(this.question.QuestionPath, id)
        break;
      default:
        break;
    }
    if(this.question.QuestionPath=="Areas")
    {
      this.router.navigate(["/ayurveda/quiz-survey-redirect", id]);
    }
    else{
    this.router.navigate(["/ayurveda/quiz-survey-redirect", this.question.NextQuestion]);
    }
  }
  Back() {
    if(this.question.QuestionPath=="Immunity" || this.question.QuestionPath=="SkinHair" || this.question.QuestionPath=="Stress"
    || this.question.QuestionPath=="WomenHealth" || this.question.QuestionPath=="Fitness")
    {
      
      this.router.navigate(["/ayurveda/quiz-survey-redirect","Areas"]);
    } else
    {
      
    var previousQuestion = _.filter(this.surveyQuestions.Question, q => q.NextQuestion == this.question.QuestionPath)[0];
    this.router.navigate(["/ayurveda/quiz-survey-redirect", previousQuestion.QuestionPath]);
    }
  }
  ngOnDestroy() {
    this.question=null;
    clearTimeout(5000);
    this.sessionHelper.set("clearTimeout", true);
  }
}
