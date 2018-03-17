import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number;
  b: number;
  nb: number = 0;
  res: number[] = [];
  add(){
    this.res[this.nb]=this.a+this.b;
    this.nb++;
    
  }
  

  
}
