import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public MyEvent1 = new EventEmitter();

  username : string = "";

  public submit()
  {
     this.MyEvent1.emit(this.username);
  }

  @Input() public text: string = "";

  constructor() { }
  
  ngOnInit(): void {
  }
}
