export class User {
  username: string;
  email: string;
  password?: string;
  token?: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean = false;

  constructor(
    username: string = '',
    email: string = '',
    password?: string,
    firstname: string = '',
    lastname: string = ''
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
