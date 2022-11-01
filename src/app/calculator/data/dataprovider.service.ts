import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDataInputs, IDataOutputs } from '../calculator.comon';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  API = 'https://developmentfunction.azurewebsites.net/api'

  constructor() { }

  GetData(data: IDataInputs): Observable<IDataOutputs> {
    return of({
      minPowierzchnia: data.glebokoscOgroduDeszczowego,
      objetoscOpaduPierwszaFala: data.glebokoscWolna,
      objetoscOpadu130lsha: data.powierzchniaZlewni,
      objetoscOpadu300lsha: 1,
      objetoscOgroduDeszczowego: 11,
      statusPierwszaFala: true,
      statusOpad130lsha: true,
      statusOpad300lsha: true,
      calculationStatus: "ok"
    });
  }
}
