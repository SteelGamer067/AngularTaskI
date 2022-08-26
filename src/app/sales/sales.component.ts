import { Component, OnInit } from '@angular/core';
import { BuyService } from './../buy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public data: any;
  public message: any;
  public msg: any;

  items: Item[] = []; 

  constructor(private route: Router, private buyService: BuyService) { }

  ngOnInit(): void {
    this.message = '';
    this.buyService.getItems().subscribe(
      (data: any) => { for(let i of data) this.items.push(i); },
      (error: any) => { this.msg = "Error occured"; }
    );
  }

  AddtoCart(data: any): void {
    if (data != null) {
      for (let item of this.items) {
        if (data == item.id || data == item.name) {
          this.buyService.setData(item.id);
          this.route.navigateByUrl('/payment');
          break;
        }
        else {
          this.message = 'Item Id or name does not exist!';
        }
      }
    }
    else this.msg = 'Field cannot be empty!';
  }

  AddNewItem(): void {
    this.route.navigateByUrl('/inventory');
  }
}

export interface Item {
  id: number;
  name: string;
  price: number;
}
