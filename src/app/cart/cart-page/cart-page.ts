import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css']
})
export class CartPage implements OnInit {

  cartItems:any[]=[];
  totalAmount:number=0;

  constructor(private cartService:CartService){}

  ngOnInit(){
    this.cartService.cart$.subscribe(items=>{
      this.cartItems=items;
      this.totalAmount=this.cartService.getTotalAmount();
    });
  }

  increase(item:any){
    this.cartService.increaseQty(item);
  }

  decrease(item:any){
    this.cartService.decreaseQty(item);
  }

  delete(item:any){
    this.cartService.removeItem(item);
  }

}