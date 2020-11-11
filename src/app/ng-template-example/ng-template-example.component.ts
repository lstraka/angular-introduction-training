import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  templateUrl: './ng-template-example.component.html',
  styleUrls: ['./ng-template-example.component.css']
})
export class NgTemplateExampleComponent implements OnInit {

  public templateTrue = true;
  public numbers = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
