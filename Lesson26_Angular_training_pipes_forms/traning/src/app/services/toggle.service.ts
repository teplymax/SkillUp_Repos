import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  subject = new Subject();
  constructor() { }
}
