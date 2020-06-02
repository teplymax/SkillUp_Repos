import { Component, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private sum = 1;
  isSpecial = false;
  isShow = false;
  name;
  constructor() { }

  ngOnInit(): void { }
  special() {
    this.isSpecial = true;
  }
  getSum() {
    console.log(this.isShow);
    return this.sum;
  }
  getInputsSum(arg1, arg2) {
    console.log(+arg1 + +arg2);
  }
}
