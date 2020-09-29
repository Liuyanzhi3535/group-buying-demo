import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [],
  imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
