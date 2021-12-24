import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductReadTesteDataSource, ProductReadTesteItem } from './product-read-teste-datasource';

@Component({
  selector: 'app-product-read-teste',
  templateUrl: './product-read-teste.component.html',
  styleUrls: ['./product-read-teste.component.css']
})
export class ProductReadTesteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductReadTesteItem>;
  dataSource: ProductReadTesteDataSource;
  products: Product[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(
    private productService: ProductService
  ) {
    this.dataSource = new ProductReadTesteDataSource();
  }

  

  ngAfterViewInit(): void {
    this.productService.read().subscribe(data => {
      this.products = data;
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;    
      this.table.dataSource = this.dataSource;
      console.log('datasource')
      console.log(this.dataSource.data)
    })
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    
    // this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {
    this.productService.read().subscribe(data => {
      this.products = data;
      this.dataSource.data = data;
      console.log(this.products)
    })
  }
}
