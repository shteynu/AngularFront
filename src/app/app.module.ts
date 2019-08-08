import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { SashaComponent } from './sasha/sasha.component';
import { MashaComponent } from './masha/masha.component';
import { DashaComponent } from './dasha/dasha.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSlideToggleModule} from '@angular/material';
import { MyDirective } from './my.directive';
import {IsraelCardComponent} from './israel-card/israel-card.component';
import {BinaryInputsComponent} from './binary-inputs/binary-inputs.component';
import { WhoWantsToBeComponent } from './who-wants-to-be/who-wants-to-be.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sasha', component: SashaComponent},
  {path: 'masha', component: MashaComponent},
  {path: 'dasha', component: DashaComponent}
];

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
    C4Component,
    SashaComponent,
    MashaComponent,
    DashaComponent,
    HomeComponent,
    AuthComponent,
    MyDirective,
    IsraelCardComponent,
    BinaryInputsComponent,
    WhoWantsToBeComponent

  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  MatInputModule, BrowserAnimationsModule,
  MatCardModule, MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSlideToggleModule
  ],

  providers: [RatesService,
  CommonBasketService,
  MessageBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
