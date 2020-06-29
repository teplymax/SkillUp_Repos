import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traning';
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
  });
  name = new FormControl('');

  onSubmit() {
    console.warn(this.userForm.value);
  }

}
