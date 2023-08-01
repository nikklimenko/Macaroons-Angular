import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { HoverBtnDirective } from './directives/hover-btn.directive';
import { MaxStrLengthPipe } from './pipes/max-str-length.pipe';
import { FormatPhoneNumberPipe } from './pipes/format-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantageComponent,
    ProductComponent,
    HoverBtnDirective,
    MaxStrLengthPipe,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
