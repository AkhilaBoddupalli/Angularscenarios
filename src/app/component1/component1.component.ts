import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public message="";
  public name="";
  @Input('parentData') public name1;
  constructor() {
    console.log(this.message);
   }
 
  
 
  ngOnInit() {
  }

}
