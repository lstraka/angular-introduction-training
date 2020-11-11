import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  @Input() messageFromSibling: string;
  public count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public sayHelloFromParent(): void {
    // alert('Parent called me');
    console.log('say hello from parent but in child');
  }


  public incrementCount(): void {
    this.count += 1;
  }

}
