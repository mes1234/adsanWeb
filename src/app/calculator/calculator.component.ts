import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  calculationState = "Wpisz dane";
  calculationStatus = 'Wciśnij \'Oblicz\'';


  inputForm = new FormGroup({
    powierzchniaZlewni: new FormControl<number>(800.0, [Validators.required, Validators.min(0.0)]),
    glebokoscWolna: new FormControl<number>(0.1, [Validators.required, Validators.min(0.0)]),
    glebokoscOgroduDeszczowego: new FormControl<number>(0.5, [Validators.required, Validators.min(0.0)]),
    qSplywuDla15lsha: new FormControl<number>(1.2, [Validators.required, Validators.min(0.0)]),
    qSplywuDla130lsha: new FormControl<number>(12, [Validators.required, Validators.min(0.0)]),
    qSplywuDla300lsha: new FormControl<number>(24, [Validators.required, Validators.min(0.0)])
  }, { updateOn: 'submit' });

  powierzchniaControlOutbound: string | undefined;

  constructor(private dataProvider: DataproviderService) { }

  sendToCalculatorFunction() {
    const dataCasted = <IDataInputs>this.inputForm.value;

    const foundNull = Object.values(dataCasted).some(x => x === null);
    if (foundNull) return;

    this.dataProvider.GetData(dataCasted).subscribe(
      value => {
        this.results = value;
        this.calculationState = this.handleCalculationState(value.calculationStatus ?? "");
        this.calculationStatus = this.handleCalculationStatus(value.calculationStatus ?? "", value.statusPierwszaFala ?? false, value.statusOpad130lsha ?? false, value.statusOpad300lsha ?? false);
      })
  }

  private handleCalculationState = (calcState: string): string => {
    switch (calcState) {
      case 'Ok':
        return 'Wyniki poprawne'
      case 'GeometriaBledna':
        return 'Błąd geometrii zbiornika'
      case 'BlednePrzeplywy':
        return 'Wpisz poprawne przepływy'
      case 'Init':
        return 'Wpisz dane'
      default:
        return '   '
    }
  };

  private handleCalculationStatus = (calcState: string, statusPierwszaFala: boolean, statusOpad130lsha: boolean, statusOpad300lsha: boolean): string => {

    if (calcState == 'Init')
      return 'Wciśnij \'Oblicz\'';

    if (calcState != 'Ok')
      return 'Błąd obliczeń';

    if (statusPierwszaFala && statusOpad130lsha && statusOpad300lsha)
      return "Ogród deszczowy przejmie opad nawalny. Nie przyjmie opadów ponadnormatywnych";

    if (statusPierwszaFala && statusOpad130lsha && !statusOpad300lsha)
      return "Ogród deszczowy przejmie \"przeciętny opad\". Wyleje podczas opadu ponadnormatywnego";

    if (statusPierwszaFala && !statusOpad130lsha && !statusOpad300lsha)
      return "Ogród deszczowy przyjmie pierwszą falę spływu. Wyleje podczas przeciętnych opadów. Zmień gabaryty lub dodaj inne rozwiązanie retencyjne";

    if (!statusPierwszaFala && !statusOpad130lsha && !statusOpad300lsha)
      return " ";

    return " ";
  }

}
