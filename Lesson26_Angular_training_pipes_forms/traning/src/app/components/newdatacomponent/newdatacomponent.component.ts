import { Component, OnInit } from '@angular/core';
import { NewdataService } from 'src/app/services/newdata.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-newdatacomponent',
  templateUrl: './newdatacomponent.component.html',
  styleUrls: ['./newdatacomponent.component.css']
})
export class NewdatacomponentComponent implements OnInit {
  allProduct: IProduct[];
  constructor(private data: NewdataService) {
  }

  ngOnInit(): void {
    this.allProduct = this.data.getAll();
  }
  addProduct(name, price) {
    this.data.addNew(name, price);
  }
}
