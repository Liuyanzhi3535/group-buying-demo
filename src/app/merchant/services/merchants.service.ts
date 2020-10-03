import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClonerService } from 'src/app/core/services/cloner.service';
import { Merchant } from '../models/merchant.model';

@Injectable({
  providedIn: 'root',
})
export class MerchantsService {
  merchants$ = new BehaviorSubject(fakeMerchants);
  constructor(private clonerService: ClonerService) {}

  getMerchants(): Observable<Merchant[]> {
    return this.merchants$.asObservable();
  }

  getMerchantById(id): Observable<Merchant> {
    return this.merchants$.pipe(
      map((val) => val.find((merchant) => merchant.id === id))
    );
  }

  createMerchant(merchant): void {
    let updatedMerchants = this.clonerService.deepClone(
      this.merchants$.getValue()
    );
    updatedMerchants = [
      ...updatedMerchants,
      { ...merchant, id: (+new Date() + Math.random()).toString() },
    ];
    this.merchants$.next(updatedMerchants);
  }

  updateMerchant(merchant): void {
    const updatedMerchants = this.clonerService.deepClone(
      this.merchants$.getValue()
    );
    const merchantIndex = updatedMerchants.findIndex(
      (merchantData) => merchantData.id === merchant.id
    );
    updatedMerchants[merchantIndex] = merchant;
    this.merchants$.next(updatedMerchants);
  }

  deleteMerchant(merchantId): void {
    let updatedMerchants = this.clonerService.deepClone(
      this.merchants$.getValue()
    );
    updatedMerchants = updatedMerchants.filter(
      (merchantData) => merchantData.id !== merchantId
    );
    this.merchants$.next(updatedMerchants);
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
