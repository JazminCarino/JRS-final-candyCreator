import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  orders: any[] =[];

  constructor(private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {

    let userId = this.usersService.getActiveUser().id;

    this.usersService.getPastOrders(userId).subscribe(
      (data) => {
        console.log(data, 'orders recieved from the service');
        this.orders = data.pastOrders;
      },
      (error) => {
        console.error('ERROR: ', error);
      }

    );
  }

  logout() {
    this.usersService.logOut()
    alert("You successfully logged out!")
    this.router.navigate(['/login']);
  }
  

}
