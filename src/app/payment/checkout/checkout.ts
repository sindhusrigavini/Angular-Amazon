import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout implements OnInit {

  totalAmount = 0;
  paymentType = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.totalAmount = this.cartService.getTotalAmount();
  }

  payNow() {

    if(this.paymentType === ''){
      alert("Please select payment method");
      return;
    }

    alert("Payment Done via " + this.paymentType);

    this.router.navigate(['/success']);
  }

}
