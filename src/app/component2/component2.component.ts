import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
 selector: 'app-component2',
 templateUrl: './component2.component.html',
 styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input('parentData') public name;
 @Output() public childEvent = new EventEmitter();
 public childname;
 constructor() { }
 ngOnInit() {
 }
 fireEvent()
 {
  
   this.childEvent.emit(this.childname);
 }
}
