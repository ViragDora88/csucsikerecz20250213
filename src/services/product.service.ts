import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiURL = 'https://dummyjson.com/products ';
  constructor(private http: HttpClient) { }
}
