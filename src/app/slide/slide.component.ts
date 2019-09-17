import { Component, OnInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';



@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {


  src: string[] ;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: semicolon
    this.src = ['../assets/images/slider1.jpg', '../assets/images/slider2.jpg', '../assets/images/slide3.jpg'] ;
  }

}
