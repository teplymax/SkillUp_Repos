import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-homework-login',
  templateUrl: './homework-login.component.html',
  styleUrls: ['./homework-login.component.css']
})
export class HomeworkLoginComponent implements OnInit {

  constructor(private guard: AuthGuard) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.guard.user.loggedin = true;
  }
}
