
// import the component decorator from its route
import { Component } from '@angular/core';


@Component ({ // Add component decorator (function {object})
  selector: 'pm-root', // In the component metadata we specify a selector with a name to use as a directive in the HTML. We set it to pm-root to identify it as a root app component.
  template: ` 
  <div> 
    <h1> Angular Rulez </h1> 
    <pm-products> </pm-products>
  </div> `

})

// export to ensure other components can use this class
export class AppComponent { //by convention, it is useful to name it AppComponent
  pageTitle: string = 'QUE DIFICIL SER BEBE'; // propertyName: dataType = valueforthepagetitle
}

/*
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
*/
