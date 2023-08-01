import { Component, Input, Output } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public phone: string = '380673689868';

  public scrollToSection(id: string):void{
    const elem = document.getElementById(id);
    if(elem){
      elem.scrollIntoView({behavior: "smooth"});
    }
  }

}
