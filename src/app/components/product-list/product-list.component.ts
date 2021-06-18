import { Component, OnInit } from '@angular/core';
import { CandyService } from 'src/app/services/candy/candy.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products =[];
  
  constructor(private candyService: CandyService) { }

  

  ngOnInit(): void {
    this.candyService.getAllProducts().subscribe(
      (data) => {
        console.log(data, 'products recieved from the service');
        this.products = data.products;
      },
      (error) => {
        console.error('ERROR: ', error);
      }
    );
    }
  }

  


