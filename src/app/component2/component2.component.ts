import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: '<h2> {{"Hello"+" "+name}} ',
  styles: []
})
export class Component2Component implements OnInit {

  constructor() { }
  @Input('parentData') public name;
  title="Child component"
  //@Input() public parentData;
  ngOnInit() {
  }

}
