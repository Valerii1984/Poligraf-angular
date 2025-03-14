import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:1337/api'; // URL Strapi

  constructor(private http: HttpClient) {}

  getPage(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pages?filters[slug][$eq]=${slug}`);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products?populate=*`);
  }
}