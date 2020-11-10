export class Userr {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  hobbies: string[];

  constructor(firstname, lastname, age, email, hobbies) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age,
      this.email = email;
    this.hobbies = hobbies;
  }
}
