import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "www.helldev.com"
  urlImage: string = "http://lorempixel.com/200/100/nature/"
  angularCourse: boolean = true;
  getValue(){
    return 1;
  }

  getLikeAngular(){
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
