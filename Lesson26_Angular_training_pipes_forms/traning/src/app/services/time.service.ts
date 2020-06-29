import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  getTime(): Observable<number> {
    return interval(2000);
  }
}
