import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyurvedaHomeComponent } from 'src/app/components/ayurveda-home/ayurveda-home/ayurveda-home.component';
import { BlogComponent } from 'src/app/components/Blog/blog/blog.component';
import { AyurMainPageComponent } from 'src/app/components/ayur-main-page/ayur-main-page.component';
import { OurStoryComponent } from 'src/app/components/our-story/our-story/our-story.component';
import { TheScienceOfAyurvedaComponent } from 'src/app/components/the-science-of-ayurveda/the-science-of-ayurveda/the-science-of-ayurveda.component';
import { QuizSurveyComponent } from 'src/app/components/common-components/quiz-survey/quiz-survey/quiz-survey.component';
import { QuizSurveyRedirectComponent } from 'src/app/components/common-components/quiz-survey-redirect/quiz-survey-redirect.component';

const routes: Routes = [
  {
    path: '', component: AyurvedaHomeComponent, children: [
      { path: '', component: AyurMainPageComponent },
      { path: 'the-science-of-ayurveda', component: TheScienceOfAyurvedaComponent },
      { path: 'our-story', component: OurStoryComponent },
      { path: 'blog', component: BlogComponent }
    ]
  },
  { path: 'quiz-survey/:question', component: QuizSurveyComponent }
  ,
  { path: 'quiz-survey-redirect/:question', component: QuizSurveyRedirectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyurvedaRoutingModule { }
