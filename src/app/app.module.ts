import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RedsquareComponent } from './redsquare/redsquare.component';
import { NgifComponent } from './ngif/ngif.component';
import {RatesService} from './Services/rates.service';
import { ConverterComponent } from './converter/converter.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import {CommonBasketService} from './Services/common-basket.service';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import {MessageBoxService} from './Services/message-box.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    TableComponent,
    InvoiceComponent,
    RedsquareComponent,
    NgifComponent,
    ConverterComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule
  ],
  providers: [RatesService,
  CommonBasketService,
  MessageBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
