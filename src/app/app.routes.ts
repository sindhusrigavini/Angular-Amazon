import { Routes } from '@angular/router';

import { MainLayout } from './layout/main-layout/main-layout';

import { ProductList } from './products/product-list/product-list';
import { CartPage } from './cart/cart-page/cart-page';
import { OrderComponent } from './orders/order/order.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { OrderSuccessComponent } from './orders/order-success/order-success.component';
import { Checkout} from './payment/checkout/checkout';



export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: ProductList },
      { path: 'cart', component: CartPage },
      { path: 'payment', component: PaymentComponent },
      { path: 'success', component: OrderSuccessComponent },
      { path: 'orders', component: OrderComponent },
      { path:'checkout', component:Checkout }
    ]
  }
];
