import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { IDataInputs, IDataOutputs } from "./calculator.comon";
import { DataproviderService } from './data/dataprovider.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  inputs: IDataInputs | undefined;
  results: IDataOutputs = {};


  inputForm = new FormGroup({
    powierzchniaZlewni: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    glebokoscWolna: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    glebokoscOgroduDeszczowego: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    qSplywuDla15lsha: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    qSplywuDla130lsha: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    qSplywuDla300lsha: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)])
  }, { updateOn: 'submit' });

  powierzchniaControlOutbound: string | undefined;

  constructor(private dataProvider: DataproviderService) { }

  sendToCalculatorFunction() {
    const dataCasted = <IDataInputs>this.inputForm.value;

    const foundNull = Object.values(dataCasted).some(x => x === null);
    if (foundNull) return;

    this.dataProvider.GetData(dataCasted).subscribe(
      value => { this.results = value; }
    );
  }
}
