import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(data => {
      this.products = data;
      console.log(this.products)
    })
  }

}
