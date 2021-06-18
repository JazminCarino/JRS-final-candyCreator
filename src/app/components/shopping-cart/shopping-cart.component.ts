import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  items = [];
  subtotal: number = 0;
  totalPrice: number = 0;


  constructor(
    private cartService: CartService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let userId = this.usersService.getActiveUser().id;

    this.cartService.getAllItemsByUserId(userId).subscribe(
      (data) => {
        console.log(data, 'Items recieved from the service');
        this.items = data;
        for (let item of this.items) {
          this.subtotal += item.price;
        }
        this.totalPrice = this.subtotal * 1.06; // + 0.06% tax rate
        console.log(this.items)
      },
      (error) => {
        console.error('ERROR: ', error);
      }
    );
  }

  deleteItem(item) {
    
    this.cartService.deleteCartItemById(item.id).subscribe(
      (data) => {
        alert('Item Removed');
        //also remove on front end
          // -> delete that item from this.items
          this.items.splice(this.items.indexOf(item), 1);
          ;
      },
      (error) => {
        alert('error: Item was not removed');
      }
    );
  }

  checkout() {
    let userId = this.usersService.getActiveUser().id;
    this.cartService.checkout(userId, this.totalPrice).subscribe(
      (data) => {
        alert('order confirmed');
        this.cartService.clearUsersCartByUserId(userId).subscribe();
        this.router.navigate(['/account']);

      },
      (error) => {
        alert('could not checkout');
      }
    )

  }
}
