import { Injectable } from '@angular/core';
import { NewUser } from '../interfaces/newUser'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: NewUser[] = [{ name: 'Max', age: '19', email: 'teplymax@gmail.com', password: '123' }]
  constructor() { }
  addUser(user) {
    this.users.push(user);
  }
  getAll() {
    return this.users;
  }
}
