import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor(private sub: ToggleService) { }

  ngOnInit(): void {
    this.sub.subject.subscribe(x => console.log(x));
    setTimeout(_ => {
      this.sub.subject.next(1);
    }, 1000);
  }

}
