import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent implements OnInit {
  currentDate = new Date();
  week = [this.currentDate];

  constructor() {

  }

  ngOnInit(): void {
    for (let i = 1; i < 7; i++) {
      this.week.push(new Date());
      this.week[i].setDate(this.week[i - 1].getDay() + 1)
    }
  }
}
