import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Merchant } from '../../models/merchant.model';

@Component({
  selector: 'app-merchant-item',
  templateUrl: './merchant-item.component.html',
  styleUrls: ['./merchant-item.component.scss'],
})
export class MerchantItemComponent implements OnInit {
  @Input() merchant: Merchant;
  @Output() editItem = new EventEmitter<string>();
  @Output() deleteItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  editMerchant(merchantId?: string): void {
    this.editItem.emit(merchantId);
  }

  deleteMerchant(merchantId: string): void {
    this.deleteItem.emit(merchantId);
  }
}
