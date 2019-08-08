import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public inputname="";
  @Output() public checkevent = new EventEmitter(); //passing tata to parent 
  constructor() {
   
   }
   submit(){
    this.checkevent.emit(this.inputname);  
  }

  ngOnInit() {
  }

}
