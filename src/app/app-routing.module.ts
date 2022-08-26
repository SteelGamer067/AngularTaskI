import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { PaymentComponent } from './payment/payment.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
