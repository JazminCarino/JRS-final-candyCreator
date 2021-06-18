import{ Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(userId: number, itemId: number): Observable<any> {
    let body = {
      userId: userId,
      itemId: itemId,
    };
    return this.http.post(`${baseUrl}/cartItem`, body);
  }

  // removeItem(userId: number, itemId: number): Observable<any>{
  //   let body ={
  //     userId: userId,
  //     itemId: itemId
  //   };
  //   return this.http.delete(`${baseUrl}/cartItem`, body)
  // }

  getAllItemsByUserId(userId: number): Observable<any> {
    //http://localhost:8080/api/cart/3
    return this.http.get(`${baseUrl}/cart/${userId}`);
  }

  deleteCartItemById(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/cartItem/${id}`); 
  }

  clearUsersCartByUserId(id: number):Observable<any> {
    return this.http.delete(`${baseUrl}/cart/clear/${id}`)

  }

  checkout(userId: number, totalPrice: number): Observable<any>{
    let route = `${baseUrl}/checkout`;
    let body = {
      userId: userId,
      totalPrice: totalPrice
    }
    console.log(body)
    return this.http.post(route, body)

  }
}
