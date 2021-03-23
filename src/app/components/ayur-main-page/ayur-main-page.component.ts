import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayur-main-page',
  templateUrl: './ayur-main-page.component.html',
  styleUrls: ['./ayur-main-page.component.css']
})
export class AyurMainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.router.navigate(['/ayurveda/quiz-survey',"Welcome"]);
  }
}
