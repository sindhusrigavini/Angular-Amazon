import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { SearchService } from '../../services/search';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];

  constructor(
    private productService: ProductService,
    private searchService: SearchService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;

    this.categories = [...new Set(this.products.map(p => p.category))];

    // 🔍 SEARCH WORKING
    this.searchService.search$.subscribe((text:string) => {
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(text.toLowerCase())
      );
    });
  }

  filterByCategory(cat: string) {
    this.filteredProducts = this.products.filter(p => p.category === cat);
  }

  showAll() {
    this.filteredProducts = this.products;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Added to Cart!');
  }

}
