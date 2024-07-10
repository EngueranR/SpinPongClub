export class User {
  username: string;
  email: string;
  password?: string;
  token?: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean = false;

  constructor(
    username: string = '',
    email: string = '',
    password?: string,
    firstName: string = '',
    lastName: string = ''
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
