import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [` .highlight {
    background-color: pink
  } `]
})
export class DataBindingComponent implements OnInit {

  url: string = "www.helldev.com"
  urlImage: string = "http://lorempixel.com/200/100/nature/"
  angularCourse: boolean = true;

  oldValue: string = "";
  newValue: string = "";

  isMouseOver: boolean = false;
  getValue() {
    return 1;
  }

  getLikeAngular() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

  clickedButton() {
    console.log('Hello!')
  }

  onKeyUp(event: KeyboardEvent) {
    this.oldValue = (<HTMLInputElement>event.target).value;
  }

  saveNewValue(value) {
    this.newValue = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
