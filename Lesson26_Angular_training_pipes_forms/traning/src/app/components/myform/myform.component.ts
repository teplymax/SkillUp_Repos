import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  gender: string[] = ['Male', 'Female'];
  user = { email: '', password: '', gender: '' };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert(this.user.email)
  }
}
