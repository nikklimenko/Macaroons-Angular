import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {AdvantageType} from "./types/advantage.type";
import {AdvantageService} from "./services/advantage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private productService: ProductService, public cartService: CartService,
              private advantageService: AdvantageService) {
  }

  title = 'Macaroons Angular';
  advantages: AdvantageType[] = [];
  products: ProductType[] = [];
  showPresent: boolean = true;
  showCartCount: boolean = false;

  ngOnInit() {
    this.products = this.productService.getProduct();
    this.advantages = this.advantageService.getAdvantages();
  }

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement):void{
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement):void{
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.total += product.price;
    this.cartService.count > 0 ? this.showCartCount = true : this.showCartCount = false;

    alert(product.title + ' added to the cart!')
  }

  public createOrder(){
    if(!this.formValues.productTitle){
      alert("Fill in the field 'Your choice'");
      return;
    }
    if(!this.formValues.name){
      alert("Fill in the field 'Name'");
      return;
    }
    if(!this.formValues.phone){
      alert("Fill in the field 'Зрщту'");
      return;
    }

    alert("Thank you for the order!");

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  };



}
