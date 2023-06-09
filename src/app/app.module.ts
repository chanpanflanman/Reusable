import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { ThirdParentComponent } from './third-parent/third-parent.component';
import { SelectorComponent } from './selector/selector.component';
import { MiniTableComponent } from './mini-table/mini-table.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FirstParentComponent,
    SecondParentComponent,
    ThirdParentComponent,
    SelectorComponent,
    MiniTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
