export class User {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  job: string;

  constructor(user) {
    Object.assign(this, user);
  }

}
