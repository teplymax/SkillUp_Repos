import { Component, OnInit } from '@angular/core';
import { NewUser } from '../../interfaces/newUser';
import { from } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: NewUser = { name: '', age: '', email: '', password: '' }
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.addUser(this.user);
    alert(`Successful!You have objects:${this.userService.getAll()}`);
  }
}
