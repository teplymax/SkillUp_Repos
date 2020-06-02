import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = "max";
  age = "19";
  arr = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.arr = this.data.getData();
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
