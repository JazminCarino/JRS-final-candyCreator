import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candy } from 'src/app/models/candy.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class CandyService {
  constructor(private http: HttpClient) {}

  getOptionsByCategory(optionName: string, catId: number): Observable<any> {
    console.log('getting options');
    ///api/candyoptions/:option/:category
    return this.http.get(`${baseUrl}/candyoptions/${optionName}/${catId}`);
  }

  getAllOptions(): Observable<any> {
    return this.http.get(`${baseUrl}/candyoptions`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/products`);
  }

  getAllGummies(): Observable<any> {
    return this.http.get(`${baseUrl}/products/:catId`)
  }

  createCandy(candy: Candy): Observable<any> {
    return this.http.post(`${baseUrl}/candy`, candy);
  }

  delete(candy: Candy): Observable<any> {
    return this.http.delete(`${baseUrl}/candy/${candy.id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/candy/update/${id}`, data);
  }

  addCreation(creation: Candy) {
    let body = {
      flavor1: creation.flavor1.id
    }
    return this.http.post(`${baseUrl}/api/candy`, body);
  }
}
