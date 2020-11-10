import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public counter = 0;
  public thisIsString = '';
  constructor() { }

  ngOnInit(): void {
    this.thisIsString = this.giveMeString();
  }

  increment(inc: number): void {
    this.counter += inc;
  }

  giveMeString(newText?: string): string {
    console.log('i am in method');
    return newText ? newText : 'i am from a method';

  }

  set changeString(newText: string) {
    console.log('in setter');
    this.thisIsString = this.giveMeString(newText);
  }

}
