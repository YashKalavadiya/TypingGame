import { Component } from '@angular/core';
import {lorem} from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();  
  enteredText = '';

  handleChange(val:string){    
    this.enteredText = val;
  }
  compare(i:number){
    if(this.enteredText[i] === this.randomText[i]){
      return 'has-text-success'
    }else if(i >= this.enteredText.length){
      return 'has-text-grey'
    }else{
      return 'has-text-danger has-text-weight-bold'
    }
  }
}
