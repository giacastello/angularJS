import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({ // ngModule decorator defining the class as an angular module
 //Our directives, components and pipes are declared here
  declarations: [ //declarations declares the app component
    AppComponent,
    ProductListComponent
  ],
 //External directives, components and pipes are declared here (angular, or third party modules)
  imports: [ //to run the app correctly in the browser.
    BrowserModule,
    FormsModule
  ],
  providers: [], //for services
  bootstrap: [AppComponent] //the starting component of our application
})
//class
export class AppModule { }

