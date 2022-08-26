import { Component, OnInit } from '@angular/core';
import { BuyService } from './../buy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private data: any;
  public item: any;
  public qty: number = 0;

  constructor(private buyService: BuyService) { }

  ngOnInit(): void {
    this.data = this.buyService.getData();
    this.buyService.getItemById(this.data).subscribe(
      (data: any) => { this.item = data; },
      (error: any) => { console.log('Error occurred!'); }
    );
    this.qty = 1;
  }
}
