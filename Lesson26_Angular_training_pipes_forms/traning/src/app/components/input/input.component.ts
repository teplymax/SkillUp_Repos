import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public age: number = 19;
  name: string = 'Max';
  constructor(private roter: ActivatedRoute) { }

  ngOnInit(): void {
    this.roter.params.subscribe((params) => { this.name = params['name']; this.age = params['age']; });

  }

}
