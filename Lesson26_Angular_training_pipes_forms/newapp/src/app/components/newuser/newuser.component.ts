import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { IUser } from 'src/app/interfaces/iuser';
@Component({
  selector: 'app-new-user',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewUserComponent implements OnInit {
  constructor(private data: UsersService) { }
  ngOnInit() {
    const newUser: IUser = { name: 'Serhii', age: 18 };
    this.data.saveToLocalStorage(newUser);
  }
}