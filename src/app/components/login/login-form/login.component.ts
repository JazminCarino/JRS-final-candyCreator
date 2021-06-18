import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() toggleForms = new EventEmitter<void>();
  @Output() newLogin = new EventEmitter<any>();

  email: string;
  password: string;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  toggleForm() {
    this.toggleForms.next();
  }
  showPass() {
    var x = <HTMLInputElement>document.getElementById('login');
    if (x.type == 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  onSubmit(form: NgForm) {
    this.userService.login(this.email, this.password).subscribe(
      (user) => {
        if (!user) {
          console.log('incorrect password');

          return;
        }
        console.log('login successful');

        let activeUser = new User(user);

        this.userService.setActiveUser(activeUser);
        this.router.navigate(['/shop']);
      },
      (error) => {
        console.error('ERROR loggin in: ', error);
      }
    );
  }
}
