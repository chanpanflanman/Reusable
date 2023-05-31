import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { TableComponent } from './table/table.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { ThirdParentComponent } from './third-parent/third-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FirstParentComponent,
    SecondParentComponent,
    ThirdParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
