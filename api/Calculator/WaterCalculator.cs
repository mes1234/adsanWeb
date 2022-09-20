namespace Calculator
{
    public class WaterCalculator : IWaterCalculator
    {
        public Task<OutboundDto> Calculate(InboundDto data)
        {

            if (!ValidateGeometry(data)) return Task.FromResult(new OutboundDto
            {
                CalculationStatus = CalculationStatus.GeometriaBledna
            });

            if (!ValidateFLow(data)) return Task.FromResult(new OutboundDto
            {
                CalculationStatus = CalculationStatus.BlednePrzeplywy
            });

            return CalculateResults(data);
        }

        private static Task<OutboundDto> CalculateResults(InboundDto data)
        {
            var minimalnaPowierzchnia = data.PowierzchniaZlewni / 10.0f;

            var objetoscOpadu = data.QSplywuDla15lsha;

            var objetoscOpadu130lsha = data.QSplywuDla130lsha * 900.0f / 1000.0f;

            var objetoscOpadu300lsha = data.QSplywuDla300lsha * 900.0f / 1000.0f;

            var objetoscOgroduDeszczowego = minimalnaPowierzchnia * data.GlebokoscWolna + 0.3f * (data.GlebokoscOgroduDeszczowego - data.GlebokoscWolna);

            var statusPierwszaFala = objetoscOpadu < objetoscOgroduDeszczowego;

            var statusOpad130lsha = objetoscOpadu130lsha < objetoscOgroduDeszczowego;

            var statusOpad300lsha = objetoscOpadu300lsha < objetoscOgroduDeszczowego;


            var result = new OutboundDto
            {
                MinPowierzchnia = minimalnaPowierzchnia,
                ObjetoscOgroduDeszczowego = objetoscOgroduDeszczowego,
                ObjetoscOpaduPierwszaFala = objetoscOpadu,
                ObjetoscOpadu130lsha = objetoscOpadu130lsha,
                ObjetoscOpadu300lsha = objetoscOpadu300lsha,
                StatusPierwszaFala = statusPierwszaFala,
                StatusOpad130lsha = statusOpad130lsha,
                StatusOpad300lsha = statusOpad300lsha,
                CalculationStatus = CalculationStatus.Ok

            };

            return Task.FromResult(result);
        }

        private static bool ValidateGeometry(InboundDto data)
        {
            return data.GlebokoscWolna <= data.GlebokoscOgroduDeszczowego;
        }

        private static bool ValidateFLow(InboundDto data)
        {
            if (data.QSplywuDla15lsha > data.QSplywuDla130lsha) return false;
            if (data.QSplywuDla15lsha > data.QSplywuDla300lsha) return false;
            if (data.QSplywuDla130lsha > data.QSplywuDla300lsha) return false;

            return true;
        }
    }
}