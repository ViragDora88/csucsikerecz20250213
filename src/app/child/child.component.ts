import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() num1! = number;
@Input() num2! = number;
@Input() operation! = string;


@Output() resultCalculated = new EventEmitter<number>;

ng0Changes(){
  let result: number= 0;

  switch (this.operation) {
    case '+': result = this.num1 + this.num2; break;
    case '-': result = this.num1 - this.num2; break;
    case '/': result = this.num2 !== 0 ? this.num1 / this.num2: NaN; break;
    case '*': result = this.num1 * this.num2; break;
  }
  this.resultCalculated.emit(result);
}
}
