import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model' ;

@Injectable({
  providedIn: 'root'
}) export class UsersService {

  readonly baseUrl = 'http://localhost:8080/api';

  newActiveUser$: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) { }

  setActiveUser(user: User){
    // this.activeUser = user;
    this.newActiveUser$.next(user)
    localStorage.setItem("user", JSON.stringify(user)) 
    
  }

  getActiveUser(): User {
    return new User(JSON.parse(localStorage.getItem("user")));
  }

  logOut(){
    this.getActiveUser();
    localStorage.removeItem("user")
    // this.newActiveUser$.next(null)
  }

  getPastOrders(userId: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/user/pastOrders/${userId}`);
    }

  public login(email: string, password: string) {
    let body = {
      email: email,
      password: password,
    };
    return this.http.post(`${this.baseUrl}/user/login`, body);
  }
      
  public createUser(newUser: User): Observable<any> {
      return this.http.post(`${this.baseUrl}/user`, newUser);
    }
  

}