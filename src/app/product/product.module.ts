import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './containers/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
