import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { UsersService } from 'src/app/services/user/users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private usersService: UsersService,
    private router: Router
  ) {}

  @Input() product: any;

  quantity = 0;

  private activeUser: User;

  ngOnInit(): void {
    this.activeUser = this.usersService.getActiveUser();
    console.log(this.activeUser);
  }

  addToCart() {

    // if(this.activeUser = null){
    //   this.router.navigate(['/login']);
    // } else {}
    console.log('posting');
    this.cartService.addToCart(this.activeUser.id, this.product.id).subscribe(
      (response) => {
        alert('Your product has been added to the cart!');
      },
      (error) => {
        alert('Product not added');
      }
    );
  }

  // categoryName(product: Product){

  //   if (product.catId == 1){
  //     category = chocolate
  //   } else {
  //     category = gummy
  //   }

  // }

  decrement(quantity) {
    return quantity++;

    console.log(quantity);
  }

  increment(quantity) {
    quantity--;

    console.log(quantity);
  }
}
