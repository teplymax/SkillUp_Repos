import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  result: number;
  a = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }
  Add(arg1, arg2) {
    this.result = +arg1 + +arg2;
  }
  Substraction(arg1, arg2) {
    this.result = +arg1 - +arg2;
  }
  Multiplication(arg1, arg2) {
    this.result = +arg1 * +arg2;
  }
  Division(arg1, arg2) {
    this.result = +arg1 / +arg2;
  }
}
