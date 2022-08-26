import { Component, OnInit } from '@angular/core';
import { BuyService } from './../buy.service';
import { Item } from './../sales/sales.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public id: any;
  public name: string = "";
  public price: any;

  constructor(private buyService: BuyService, private route: Router) { }

  ngOnInit(): void { }

  AddItem(): void {
    this.buyService.postItemById(this.id, this.name, this.price).subscribe(
      (data: any) => { this.route.navigateByUrl('/sales'); },
      (error: any) => { console.log(error); }
    );
  }
}
