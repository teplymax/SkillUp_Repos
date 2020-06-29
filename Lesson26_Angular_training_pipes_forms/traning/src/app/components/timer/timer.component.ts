import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private time: TimeService) { }

  ngOnInit(): void {
    this.time.getTime().subscribe(time => {
      console.log(time)
    }
    );

  }
}
