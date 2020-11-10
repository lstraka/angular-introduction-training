export class ExtraUser {
  firstName: string;
  lastName: string;
  protected myAge: number;
  roles: string[];

  constructor(firstName?: string, lastName?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = [];
  }
  private _age: number;

  public get age(): number {
    return this._age;
  }

  public set age(age) {
    this._age = age;
  }
}

export class SuperExtraUser extends ExtraUser {
  getAge(): number {
    return this.age;
  }

  constructor() {
    super();
    this.age = 5;
    console.log(this.age);
  }

}
