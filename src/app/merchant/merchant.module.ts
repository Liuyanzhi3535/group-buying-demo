import { NgModule } from '@angular/core';

import { MerchantRoutingModule } from './merchant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MerchantListComponent } from './containers/merchant-list/merchant-list.component';
import { MerchantItemComponent } from './components/merchant-item/merchant-item.component';
import { MerchantEditComponent } from './components/merchant-edit/merchant-edit.component';

@NgModule({
  declarations: [
    MerchantListComponent,
    MerchantItemComponent,
    MerchantEditComponent,
  ],
  imports: [MerchantRoutingModule, SharedModule],
  exports: [],
})
export class MerchantModule {}
