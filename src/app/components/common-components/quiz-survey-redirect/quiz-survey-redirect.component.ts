import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionHelper } from 'src/app/core/session.helper';

@Component({
  selector: 'app-quiz-survey-redirect',
  templateUrl: './quiz-survey-redirect.component.html',
  styleUrls: ['./quiz-survey-redirect.component.css']
})
export class QuizSurveyRedirectComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private sessionHelper: SessionHelper
  ) {
    this.route.params.subscribe(params => {
      this.router.navigate(["/ayurveda/quiz-survey", params['question']]);
    });
  }
  ngOnInit(): void {
  }

}
