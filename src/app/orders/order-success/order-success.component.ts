import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  orderData: any;
  expectedDeliveryDate: string = '';

  ngOnInit(): void {

    const data = localStorage.getItem('orderData');

    if (data) {
      this.orderData = JSON.parse(data);
    }

    let today = new Date();
    today.setDate(today.getDate() + 5);
    this.expectedDeliveryDate = today.toDateString();
  }
}