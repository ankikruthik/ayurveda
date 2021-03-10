import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayurveda-home',
  templateUrl: './ayurveda-home.component.html',
  styleUrls: ['./ayurveda-home.component.css']
})
export class AyurvedaHomeComponent implements OnInit {

  scrlBD = false

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.scrlBD = true
    }else{
      this.scrlBD = false
    }
  }

  ngOnInit(): void {
  }

}
