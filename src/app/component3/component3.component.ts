import { Component, OnInit,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  //@Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  public childname="";
  constructor() { }
  ngOnInit() {
  }
  fireEvent()
  {
   
    this.childEvent.emit(this.childname);
  }

}
