import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class NewdataService {
  products: IProduct[] = [
    { name: 'Product 1', price: 50 }, { name: 'Product 2', price: 150 }, { name: 'Product 3', price: 100 }
  ];
  constructor() { }
  getAll() {
    return this.products;
  }
  addNew(name, price) {
    this.products.push({ name: name, price: +price });
  }
}
