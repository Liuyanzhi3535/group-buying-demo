import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClonerService } from 'src/app/core/services/cloner.service';
import { Merchant } from '../models/merchant.model';

@Injectable({
  providedIn: 'root',
})
export class MerchantsService {
  merchants$ = new BehaviorSubject<Merchant[]>([]);
  constructor(private clonerService: ClonerService, private http: HttpClient) {}

  fetchMerchant(): void {
    this.http
      .get('./assets/merchantData.json')
      .subscribe((merchants: Merchant[]) => this.merchants$.next(merchants));
  }

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
