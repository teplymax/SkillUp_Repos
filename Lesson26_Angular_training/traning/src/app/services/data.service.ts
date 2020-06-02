import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getData() {
    return [{ "name": 'Max', "adge": '20' }, { "name": 'Alex', "adge": '21' }];
  }
}
