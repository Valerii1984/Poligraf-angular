import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page: any;
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPage('home').subscribe((response) => {
      this.page = response.data[0];
    });
    this.apiService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }

  getImageUrl(product: any): string {
    return `http://localhost:1337${product.attributes.image.data.attributes.url}`;
  }
}