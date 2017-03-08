import { Component } from '@angular/core';


export class Hero {
    id: number;
    name: string;
}


@Component({
  selector      : 'percept-dashboard',
  templateUrl   : './app.component.html',
  styleUrls     : ['./app.component.css']
})
export class AppComponent {
  title = 'Experiment Dashboard';
  hero : Hero = {
     id :1,
     name: "Winston"
  }
}
