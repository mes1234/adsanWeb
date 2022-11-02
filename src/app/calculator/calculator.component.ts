import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDataInputs, IDataOutputs } from "./calculator.comon";
import { DataproviderService } from './data/dataprovider.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  inputs: IDataInputs | undefined;
  results: IDataOutputs = {};


  inputForm = new FormGroup({
    powierzchniaZlewni: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    glebokoscWolna: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    glebokoscOgroduDeszczowego: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    qSplywuDla15lsha: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    qSplywuDla130lsha: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)]),
    qSplywuDla300lsha: new FormControl<number>(80.0, [Validators.required, Validators.min(0.0)])
  });

  powierzchniaControlOutbound: string | undefined;

  constructor(private dataProvider: DataproviderService) { }

  ngOnInit(): void {

    this.inputForm.valueChanges.subscribe(value => {
      const data = {
        powierzchniaZlewni: value.powierzchniaZlewni ?? 0.0,
        glebokoscWolna: value.glebokoscWolna ?? 0.0,
        glebokoscOgroduDeszczowego: value.glebokoscOgroduDeszczowego ?? 0.0,
        qSplywuDla15lsha: value.qSplywuDla15lsha ?? 0.0,
        qSplywuDla130lsha: value.qSplywuDla15lsha ?? 0.0,
        qSplywuDla300lsha: value.qSplywuDla300lsha ?? 0.0,
      };

      this.dataProvider.GetData(data).subscribe(
        value => {
          this.results.minPowierzchnia = value.minPowierzchnia;
          this.results.objetoscOgroduDeszczowego = value.objetoscOgroduDeszczowego;
          this.results.objetoscOpadu130lsha = value.objetoscOpadu130lsha;
          this.results.objetoscOpadu300lsha = value.objetoscOpadu300lsha;
          this.results.statusPierwszaFala = value.statusPierwszaFala;
          this.results.statusOpad130lsha = value.statusOpad130lsha;
          this.results.statusOpad300lsha = value.statusOpad300lsha;
          this.results.calculationStatus = value.calculationStatus?.toString();

        }
      );
    });
  }



}
