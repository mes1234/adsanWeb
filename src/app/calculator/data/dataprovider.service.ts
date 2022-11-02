import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { NameService } from '../api/api/name.service';
import { OutboundDto } from '../api/model/outboundDto';
import { IDataInputs, IDataOutputs } from '../calculator.comon';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor(private dataAccess: NameService) { };

  GetData(data: IDataInputs): Observable<OutboundDto> {
    const inputs = {
      powierzchniaZlewni: data.powierzchniaZlewni,
      glebokoscWolna: data.glebokoscWolna,
      glebokoscOgroduDeszczowego: data.glebokoscOgroduDeszczowego,
      qSplywuDla15lsha: data.qSplywuDla15lsha,
      qSplywuDla130lsha: data.qSplywuDla15lsha,
      qSplywuDla300lsha: data.qSplywuDla300lsha,
    };

    return this.dataAccess.run(inputs);

  }
}
