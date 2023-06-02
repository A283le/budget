import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './custom/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  incomes: Item[];
  expenses: Item[];

  constructor(){
    this.incomes = [new Item()];
    this.expenses = [new Item()];
  }

  addItem(event: any){
    if(event.target.id.startsWith("income")){
      this.incomes.push(new Item());
    } else{
      this.expenses.push(new Item());
    }
  }

  removeItem(event:any, index: number){
    if(event.target.id.startsWith("income")){
      if(this.incomes.length == 1)
        return;
      this.incomes.splice(index, 1);
    } else {
      if(this.expenses.length == 1)
        return;
      this.expenses.splice(index, 1);
    }
  }
}
