import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service'
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css'],
  animations: [
    trigger('showItem', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(100%)'
        }),
        animate(2000)
      ])
    ])
  ]
})
export class ShowusersComponent implements OnInit {
  users = [];
  constructor(private userservice: UserServiceService) { }

  ngOnInit(): void {
    this.users = this.userservice.getAll();
  }

}
