import { Component} from '@angular/core';
//the component decorator makes this class a component 

@Component ({
    selector:'pm-products',  // in app.component.ts as html tag
    templateUrl:'./product-list.component.html' //path to HTML file
})
   

export class ProductListComponent { //makes it available to others to use

}

