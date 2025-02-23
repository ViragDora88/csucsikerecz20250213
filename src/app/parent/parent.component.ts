import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
number1: number = 0;
number2: number = 0;
operation: string '+';
result: number | null = null

calculate(){}

displayResult(calculatedResult: number){
  this.result = calculatedResult;
}
}
