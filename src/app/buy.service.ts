import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from './sales/sales.component';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  private url = "http://localhost:8080/";
  private item: any;

  constructor(private httpClient: HttpClient) { }

  setData(item: any): void {
    this.item = item;
  }

  getData(): any {
    return this.item;
  }

  getItems(): any {
    var body: any = {};
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.get(this.url + 'sales', { headers }).pipe(map((res: any) => res));
  }

  getItemById(itemId: any): any {
    var body: any = {};
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.get(this.url + 'payment/' + itemId, { headers }).pipe(map((res: any) => res));
  }

  postItemById(id: any, name: any, price: any) {
    var body: any = { "id": id, "name": name, "price": price };
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post(this.url + 'inventory', body, { headers }).pipe(map((res: any) => res));
  }
}
