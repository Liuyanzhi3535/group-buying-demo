import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { moduleName: '項目清單' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
