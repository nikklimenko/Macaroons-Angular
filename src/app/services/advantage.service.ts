import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {

  getAdvantages(){
    return [
      {
        title: 'Best products',
        description: 'We honestly make macarons only from natural and high-quality ingredients. We do not use preservatives, flavorings, and artificial colorings.'
      },
      {
        title: 'Many flavors.',
        description: 'Our goal is to provide you with a wide variety of flavors. You`ll be surprised to know that we have over 70 flavors of macarons.'
      },
      {
        title: 'Biscuit dough',
        description: 'All macarons are prepared using sponge dough (biscuit dough) with high-quality 82.5% butter. There is no margarine or yeast in the ingredients.'
      },
      {
        title: 'Honest product',
        description: 'The taste, quality, and safety of our macarons are confirmed by the compliance declaration we obtained on June 22, 2016.'
      },
    ];
  }

}
