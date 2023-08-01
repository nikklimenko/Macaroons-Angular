import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  getProduct(){
    return [
      {
        image: 'item_macaroon_1.png',
        title: 'Raspberry macaroon',
        price: 1.70,
      },
      {
        image: 'item_macaroon_2.png',
        title: 'Mango macaroon',
        price: 1.70,
      },
      {
        image: 'item_macaroon_3.png',
        title: 'Vanilla macaroon',
        price: 1.70,
      },
      {
        image: 'item_macaroon_4.png',
        title: 'Pistachio macaroon',
        price: 1.70,
      },
    ];
  }
}
