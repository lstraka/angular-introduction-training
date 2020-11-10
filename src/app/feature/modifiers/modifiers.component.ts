import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.css']
})
export class ModifiersComponent implements OnInit {

  private huhu1 = 'I am huhuhu';

  private _hihi = 'I am hihi';

  public parent: Parent;

  public child: Child;

  constructor() { }

  ngOnInit(): void {
    this.parent = new Parent('male name', 'Kosice', 1, 'M');

    this.child = new Child('F name', 'Presov', 2, 'F', 15);

    this.child.changeGender('M');
    this.child.genderr = 'Male';
    this.child.settGender('WWWW');
  }

  get huhu(): string {
    return this.huhu1;
  }

  get hihi(): string {
    return this._hihi;
  }


}


export class Parent {

  private name: string;
  private address: string;
  public id: number;
  protected gender: string;

  constructor(name, address, id, gender) {
    this.name = name;
    this.address = address;
    this.id = id;
    this.gender = gender;
  }

  get addresss(): string {
    return this.address;
  }

}

export class Child extends Parent {

  public sibling: number;

  constructor(name, address, id, gender, siblings) {
    super(name, address, id, gender);
    this.sibling = siblings;

  }

  set genderr(gender) {
    this.gender = gender;
  }

  public settGender(gender): void {
    this.gender = gender;
  }

  public changeGender(gender): void {
    this.gender = gender;
  }
}
