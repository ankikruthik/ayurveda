import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionHelper } from './core/session.helper';
import { AdminMaterialModule } from './_helpers/_helpers/material/admin-material/admin-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizSurveyRedirectComponent } from './components/common-components/quiz-survey-redirect/quiz-survey-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizSurveyRedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminMaterialModule,
    NgbModule
  ],
  providers: [SessionHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
