import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user'

@Component({
  selector: 'app-formstraning',
  templateUrl: './formstraning.component.html',
  styleUrls: ['./formstraning.component.css']
})
export class FormstraningComponent implements OnInit {
  user: User = { login: '', password: '', massage: '', checked: false };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert("Data has been submitted!")
    console.log(this.user)
  }
}
