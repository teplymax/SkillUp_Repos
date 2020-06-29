import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  result: number;
  input = '';
  constructor() { }

  ngOnInit(): void {
  }
  Add(arg1, arg2) {
    this.input += '+';
    this.result = +arg1 + +arg2;
  }
  Substraction(arg1, arg2) {
    this.input += '-';
    this.result = +arg1 - +arg2;
  }
  Multiplication(arg1, arg2) {
    this.input += '*';
    this.result = +arg1 * +arg2;
  }
  Division(arg1, arg2) {
    this.input += '/';
    this.result = +arg1 / +arg2;
  }
  setInputValues(arg) {
    this.input += `${arg}`
  }
  backspace() {
    let inputLength = this.input.length;
    console.log(this.input.slice(0, inputLength - 1));
    inputLength--;
  }
  clear() {
    this.input = '';
  }
}
