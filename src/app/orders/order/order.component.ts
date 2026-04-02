import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:'app-order',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./order.component.html'
})
export class OrderComponent implements OnInit{

  orders:any=[]

  ngOnInit(){

    this.orders = JSON.parse(localStorage.getItem("orders") || "[]")

    this.orders.forEach((order:any)=>{
      let today = new Date()
      let delivery = new Date(order.expectedDelivery)

      if(today >= delivery && order.status!="Cancelled"){
        order.status="Delivered"
      }
    })

    localStorage.setItem("orders",JSON.stringify(this.orders))
  }

  cancelOrder(id:any){

    let orders = JSON.parse(localStorage.getItem("orders") || "[]")

    orders = orders.map((o:any)=>{
      if(o.orderId == id){
        o.status="Cancelled"
      }
      return o
    })

    localStorage.setItem("orders",JSON.stringify(orders))
    this.orders = orders
  }

}
