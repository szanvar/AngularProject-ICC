import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'ComponentComunication2';
  
  public Message1 : string = "";

 lengthInputText() :any  
  {
   return this.Message1.length;
  }
}
