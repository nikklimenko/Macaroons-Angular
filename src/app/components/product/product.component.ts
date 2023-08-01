import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductType;
  @Output() addProductToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  constructor() {
    this.product = {
      image: '',
      title: '',
      price: 0,
    }
  }

  addProductToCart(){
    this.addProductToCartEvent.emit(this.product);
  }
}
