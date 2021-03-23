import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyurvedaRoutingModule } from './ayurveda-routing.module';
import { AyurvedaHomeComponent } from '../../components/ayurveda-home/ayurveda-home/ayurveda-home.component';
import { AyurHeaderComponent } from '../../components/common-components/ayur-header/ayur-header/ayur-header.component';
import { TheScienceOfAyurvedaComponent } from '../../components/the-science-of-ayurveda/the-science-of-ayurveda/the-science-of-ayurveda.component';
import { OurStoryComponent } from '../../components/our-story/our-story/our-story.component';
import { BlogComponent } from '../../components/Blog/blog/blog.component';
import { AyurCopyrightComponent } from '../../components/common-components/ayur-copyright/ayur-copyright/ayur-copyright.component';
import { AyurFooterComponent } from '../../components/common-components/ayur-footer/ayur-footer/ayur-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminMaterialModule } from 'src/app/_helpers/_helpers/material/admin-material/admin-material.module';
import { AyurChatbotComponent } from '../../components/common-components/ayur-chatbot/ayur-chatbot/ayur-chatbot.component';
import { AyurMainPageComponent } from '../../components/ayur-main-page/ayur-main-page.component';
import { QuizSurveyComponent } from '../../components/common-components/quiz-survey/quiz-survey/quiz-survey.component';


@NgModule({
  declarations: [AyurvedaHomeComponent, AyurHeaderComponent, TheScienceOfAyurvedaComponent, OurStoryComponent, BlogComponent, AyurCopyrightComponent, AyurFooterComponent, AyurChatbotComponent, AyurMainPageComponent, QuizSurveyComponent],
  imports: [
    CommonModule,
    AyurvedaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminMaterialModule
  ]
})
export class AyurvedaModule { }
