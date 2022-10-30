import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  powierzchniaControlInbound = new FormControl<number>(1000.)
  powierzchniaControlOutbound: string | undefined;

  constructor() { }

  ngOnInit(): void {

    this.powierzchniaControlInbound.valueChanges.subscribe(value => {
      this.powierzchniaControlOutbound = value?.toString();
    });
  }

}
