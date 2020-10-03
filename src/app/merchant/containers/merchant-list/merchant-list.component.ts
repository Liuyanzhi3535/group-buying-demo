import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Merchant } from '../../models/merchant.model';
import { MerchantsService } from '../../services/merchants.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss'],
})
export class MerchantListComponent implements OnInit {
  merchants$: Observable<Merchant[]>;

  constructor(private merchantsService: MerchantsService) {}

  ngOnInit(): void {
    this.merchants$ = this.merchantsService.getMerchants();
  }

  openEditModal(mode, merchantId?): void {
    console.log('mode', mode);
    console.log('id', merchantId);
  }

  createMerchant(merchant): void {
    this.merchantsService.createMerchant(merchant);
  }

  updateMerchant(merchant): void {
    this.merchantsService.updateMerchant(merchant);
  }

  deleteMerchant(merchantId): void {
    this.merchantsService.deleteMerchant(merchantId);
  }
}
