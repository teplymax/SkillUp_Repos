import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(private sub: ToggleService) { }

  ngOnInit(): void {
    this.sub.subject.subscribe(x => console.log('new', x));
  }

}
