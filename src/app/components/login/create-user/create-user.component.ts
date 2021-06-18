import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/user/users.service';


@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output() toggleForms = new EventEmitter<void>();

  user: User;
  confirmedPassword: string;

  showCreateInputs: boolean;

  


  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = {
      id: 0,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    this.user = new User(this.user);
  }

  toggleForm() {
    this.toggleForms.next();
  }

  onSubmit(form: NgForm) {
    if (this.user.password != this.confirmedPassword) {
      console.log('password mismatch');
      return;

    } else if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.user.email)) {
      console.log('invalid email');
      return;

    } else {
      this.userService.createUser(this.user).subscribe(
        (data) => {
          if (!data) {
            console.log('ERROR Create User Failed');
          }
          console.log('New User Created Successfully');
          this.userService.setActiveUser(data);
          this.router.navigate(['/shop']);

        },
        (error) => {
          console.error('ERROR creating user: ', error);
        }
      );
    }
  }
}
