import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  user: User;
  cartlength: number = 0;

  // subject/subscription to listen to when 'cartSizeChanged'
  // sizechanged.subscribe((newSize) => {this.cartSize = newSize})
  

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.user = this.userService.getActiveUser();
  }
}
