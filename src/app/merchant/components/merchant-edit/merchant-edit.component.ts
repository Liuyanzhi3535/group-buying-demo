import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClonerService } from './../../../core/services/cloner.service';
import { Merchant } from '../../models/merchant.model';

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.scss'],
})
export class MerchantEditComponent implements OnInit {
  merchant = new Merchant();

  constructor(
    public dialogRef: MatDialogRef<MerchantEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private clonerSevice: ClonerService
  ) {}

  ngOnInit(): void {
    if (this.data.merchant) {
      this.merchant = this.clonerSevice.deepClone(this.data.merchant);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
