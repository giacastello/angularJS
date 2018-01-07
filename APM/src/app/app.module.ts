import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({ // ngModule decorator defining the class as an angular module
  declarations: [ //declarations declares the app component
    AppComponent,
    ProductListComponent
  ],
  imports: [ //to run the app correctly in the browser.
    BrowserModule
  ],
  providers: [], //for services
  bootstrap: [AppComponent] //the starting component of our application
})
//class
export class AppModule { }

