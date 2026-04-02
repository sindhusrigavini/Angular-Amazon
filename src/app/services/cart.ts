import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: any) {

    const item = this.cartItems.find(p => p.id === product.id);

    if(item){
      item.quantity++;
    }else{
      this.cartItems.push({...product, quantity:1});
    }

    this.cartSubject.next(this.cartItems);
  }

  increaseQty(product: any){
    product.quantity++;
    this.cartSubject.next(this.cartItems);
  }

  decreaseQty(product: any){
    if(product.quantity > 1){
      product.quantity--;
    }
    this.cartSubject.next(this.cartItems);
  }

  removeItem(product: any){
    this.cartItems = this.cartItems.filter(p => p.id !== product.id);
    this.cartSubject.next(this.cartItems);
  }

  getTotalAmount(){
    return this.cartItems.reduce((total,item) =>
      total + (item.price * item.quantity),0);
  }

}
