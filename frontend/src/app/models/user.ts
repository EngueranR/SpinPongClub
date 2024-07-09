export class User {
  _id: string;
  username: string;
  email: string;
  password?: string;
  token?: string;

  constructor(
    _id: string = '',
    username: string = '',
    email: string = '',
    password?: string,
    token?: string
  ) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.token = token;
  }
}
