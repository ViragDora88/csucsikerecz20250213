import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  a: number = 0;
  b: number = 0;
  operation: string = '+'; 
  result: number | null = null;

  calculate() {
    this.result = null;
    this.result = this.operation === '+' ? this.a + this.b : this.operation === '-' ? this.a - this.b : this.operation === '*' ? this.a * this.b : this.b !== 0 ? this.a / this.b : NaN;
  }

  showResult(calculatedResult: number) {
    this.result = calculatedResult;
  }
}
