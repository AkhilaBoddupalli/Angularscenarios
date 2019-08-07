import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

// display(name:String)
// {
  
// }
submit(value)
{
  console.log(value); 
  //printing value to the console
}

  ngOnInit() {
  }

}
