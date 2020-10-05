import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'merchant',
        loadChildren: () =>
          import('./merchant/merchant.module').then(
            (mod) => mod.MerchantModule
          ),
      },
      {
        path: 'product/:merchantId',
        loadChildren: () =>
          import('./product/product.module').then((mod) => mod.ProductModule),
      },
      { path: '**', redirectTo: 'merchant' },
    ],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
