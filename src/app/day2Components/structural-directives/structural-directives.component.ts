import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public condition = true;
  public numbers = [];
  myWallet = new Wallet();

  wannBeUpper = 'i will be written uppercase';
  wannaBeLower = 'I WILL BE LOWERCASE';
  now = new Date();


  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < 10; i++) {
      this.numbers.push(i + 1);
    }
    for (let i = 10; i > 0; i--) {
      this.myWallet.fees.push(i + 1);
    }
    this.myWallet.incomes = this.numbers;
  }

}

export class Wallet {
  month: Date;
  incomes: number[];
  fees: number[];

  constructor() {
    this.incomes = [];
    this.fees = [];
  }
}
