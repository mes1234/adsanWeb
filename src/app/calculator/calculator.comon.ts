export interface IDataInputs {
    powierzchniaZlewni: number,
    glebokoscWolna: number,
    glebokoscOgroduDeszczowego: number,
    qSplywuDla15lsha: number,
    qSplywuDla130lsha: number,
    qSplywuDla300lsha: number,
}

export interface IDataOutputs {
    minPowierzchnia: number,
    objetoscOpaduPierwszaFala: number,
    objetoscOpadu130lsha: number,
    objetoscOpadu300lsha: number,
    objetoscOgroduDeszczowego: number,
    statusPierwszaFala: boolean,
    statusOpad130lsha: boolean,
    statusOpad300lsha: boolean,
    calculationStatus: string
}
