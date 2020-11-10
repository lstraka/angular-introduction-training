import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ftr1',
  templateUrl: './ftr1.component.html',
  styleUrls: ['./ftr1.component.css']
})
export class Ftr1Component implements OnInit {

  public inc = 0;
  constructor() { }

  ngOnInit(): void {
  }
  foo(increment): void {
    this.inc += increment;
  }
}
