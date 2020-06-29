import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework-routing',
  templateUrl: './homework-routing.component.html',
  styleUrls: ['./homework-routing.component.css']
})
export class HomeworkRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert('!!!')
  }
}
