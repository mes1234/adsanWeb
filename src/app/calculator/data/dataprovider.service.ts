import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { InboundDto } from '../api';
import { NameService } from '../api/api/name.service';
import { OutboundDto } from '../api/model/outboundDto';
import { IDataInputs, IDataOutputs } from '../calculator.comon';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor(private dataAccess: NameService) { };

  GetData(data: IDataInputs): Observable<IDataOutputs> {
    return this
      .dataAccess
      .run(this.mapInputsDto(data))
      .pipe(map(this.mapResultDto));
  }

  private mapInputsDto(data: IDataInputs): InboundDto {
    return {
      powierzchniaZlewni: data.powierzchniaZlewni,
      glebokoscWolna: data.glebokoscWolna,
      glebokoscOgroduDeszczowego: data.glebokoscOgroduDeszczowego,
      qSplywuDla15lsha: data.qSplywuDla15lsha,
      qSplywuDla130lsha: data.qSplywuDla15lsha,
      qSplywuDla300lsha: data.qSplywuDla300lsha,
    }
  }

  private mapResultDto(value: OutboundDto): IDataOutputs {
    return {
      minPowierzchnia: value.minPowierzchnia,
      objetoscOgroduDeszczowego: value.objetoscOgroduDeszczowego,
      objetoscOpadu130lsha: value.objetoscOpadu130lsha,
      objetoscOpadu300lsha: value.objetoscOpadu300lsha,
      statusPierwszaFala: value.statusPierwszaFala,
      statusOpad130lsha: value.statusOpad130lsha,
      statusOpad300lsha: value.statusOpad300lsha,
      calculationStatus: value.calculationStatus?.toString(),
    }
  }
}
