import { Component, OnInit } from '@angular/core';

import { MerchantsService } from './../../services/merchants.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { Merchant } from '../../models/merchant.model';
import { MerchantEditComponent } from '../../components/merchant-edit/merchant-edit.component';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss'],
})
export class MerchantListComponent implements OnInit {
  merchants$: Observable<Merchant[]>;

  constructor(
    private merchantsService: MerchantsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.merchantsService.fetchMerchant();
    this.merchants$ = this.merchantsService.getMerchants();
  }

  openEditModal(mode: 'create' | 'edit', merchantId?: string): void {
    let dialogRef;
    const modalComponent = MerchantEditComponent;
    const modalWith = '500px';
    if (merchantId) {
      this.merchantsService
        .getMerchantById(merchantId)
        .pipe(take(1))
        .subscribe((merchant) => {
          dialogRef = this.dialog.open(modalComponent, {
            width: modalWith,
            data: { mode, merchant },
          });
        });
    } else {
      dialogRef = this.dialog.open(modalComponent, {
        width: modalWith,
        data: { mode },
      });
    }

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((merchant: Merchant) => {
        if (!merchant) return;
        switch (mode) {
          case 'create':
            this.createMerchant(merchant);
            break;
          case 'edit':
            this.updateMerchant(merchant);
            break;
        }
      });
  }

  createMerchant(merchant: Merchant): void {
    this.merchantsService.createMerchant(merchant);
  }

  updateMerchant(merchant: Merchant): void {
    this.merchantsService.updateMerchant(merchant);
  }

  deleteMerchant(merchantId: Merchant): void {
    this.merchantsService.deleteMerchant(merchantId);
  }
}
