import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-payment',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./payment.component.html'
})
export class PaymentComponent{

  paymentType:any;

  constructor(private router:Router){}

  placeOrder(){

    let orderId = "ORD" + Math.floor(Math.random()*1000000)

    let today = new Date()
    let expectedDate = new Date()
    expectedDate.setDate(today.getDate()+5)

    let order = {
      orderId:orderId,
      payment:this.paymentType,
      status:"Order Confirmed",
      expectedDelivery:expectedDate
    }

    let orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.push(order)

    localStorage.setItem("orders",JSON.stringify(orders))
    localStorage.setItem("currentOrderId",orderId)

    this.router.navigate(['/success'])
  }

}
