import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Merchant } from '../../models/merchant.model';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss'],
})
export class MerchantListComponent implements OnInit {
  merchants: Merchant[] = fakeMerchants;

  constructor() {}

  ngOnInit(): void {}

  openEditModal(mode, merchantId?): void {
    console.log('mode', mode);
    console.log('id', merchantId);
  }

  createMerchant(merchant): void {}

  updateMerchant(merchant): void {}

  deleteMerchant(merchantId): void {
    this.merchants = this.merchants.filter(
      (merchant) => merchant.id !== merchantId
    );
  }
}

const fakeMerchants = [
  {
    id: '1',
    name: 'gogo',
    adress: '300 新竹市東區關新街xx號',
    phone: '03 668 7123',
    website: 'https://www.facebook.com/gogofreshtea.tw/',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
  },
  {
    adress: '300新竹市東區建功一路XX號',
    id: '2',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
    name: '天地茶會',
    phone: '+88635165123',
    website: 'https://ice-cream-and-drink-shop-2406.business.site/',
  },
  {
    id: '3',
    adress: '30068新竹市東區學府路XX號',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
    name: '飲料王',
    phone: '+88635165123',
    website: 'http://www.chingshin.tw/product.php',
  },
  {
    adress: '300新竹市東區金山街XXX樓',
    id: '4',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
    name: '很渴紅茶',
    phone: '+88635630123',
    website: 'http://www.kebuke.com/#shop',
  },
  {
    id: '5',
    name: 'gogo3',
    adress: '300 新竹市東區關新街xx號',
    phone: '03 668 7123',
    website: 'https://www.facebook.com/gogofreshtea.tw/',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
  },
  {
    id: '6',
    name: 'gogo4',
    adress: '300 新竹市東區關新街xx號',
    phone: '03 668 7123',
    website: 'https://www.facebook.com/gogofreshtea.tw/',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
  },
  {
    id: '7',
    name: 'gogo5',
    adress: '300 新竹市東區關新街xx號',
    phone: '03 668 7123',
    website: 'https://www.facebook.com/gogofreshtea.tw/',
    logo: 'https://dummyimage.com/280x150/8a8a8a/fff',
  },
];
