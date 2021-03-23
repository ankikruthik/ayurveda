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
    this.route.params.subscribe(params => {
      this.nextQuestion = params['question'];
      if (this.nextQuestion) {
        this.getQuestions();
        this.getNextQuestion(this.nextQuestion);
        this.userName = this.sessionHelper.get("userName");
       this._changeDetector.markForCheck();
          setTimeout(() => {
            if(this.question.QuestionType=="Html"){
            this.router.navigate(["/ayurveda/quiz-survey", this.question.NextQuestion]);
          }
        }, 5000);  //5s
        
      }
    });
    this.surveyForm = this.formBuilder.group({
      questionControl: ['', [Validators.required]]
    });

  }
  getQuestions() {
    this.surveyQuestions = (data as any).default;
  }
  getNextQuestion(questionPath) {
    this.question = _.filter(this.surveyQuestions.Question, q => q.QuestionPath == questionPath)[0];
    if (this.question.QuestionPath == "MeetYou")
      this.question.QuestionName = this.question.QuestionName.replace("{{userName}}", this.userName);
  }
  Next(id) {
    switch (this.question.QuestionPath) {
      case "Name":
        this.userName=this.surveyForm.value.questionControl;
        this.sessionHelper.removeItem("userName");
        this.sessionHelper.set("userName", this.surveyForm.value.questionControl)
        this._changeDetector.markForCheck();
        break;
        case "Emoji":
          this.sessionHelper.set("Emoji", id)
          break;
      default:
        break;
    }
    this.router.navigate(["/ayurveda/quiz-survey", this.question.NextQuestion]);
  }
}
