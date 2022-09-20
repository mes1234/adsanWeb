using Calculator;
using FluentAssertions;
using System.Threading.Tasks;
using Xunit;

namespace Function.Tests
{
    public class WaterCalculatorTests
    {
        [Fact]
        public async Task ValueTestsShouldPass_Test()
        {
            // Arrange
            var input = new InboundDto
            {
                PowierzchniaZlewni = 800.0f,
                GlebokoscOgroduDeszczowego = 0.5f,
                GlebokoscWolna = 0.1f,
                QSplywuDla15lsha = 1.2f,
                QSplywuDla130lsha = 11.0f,
                QSplywuDla300lsha = 24.0f
            };

            var sut = new WaterCalculator();

            // Act

            var result = await sut.Calculate(input);

            // Assert

            result.CalculationStatus.Should().Be(CalculationStatus.Ok);

            result.StatusPierwszaFala.Should().BeTrue();
            result.StatusOpad130lsha.Should().BeFalse();
            result.StatusOpad300lsha.Should().BeFalse();

            result.ObjetoscOgroduDeszczowego.Should().BeApproximately(8.12f, 0.01f);

            result.ObjetoscOpaduPierwszaFala.Should().BeApproximately(1.2f, 0.01f);
            result.ObjetoscOpadu130lsha.Should().BeApproximately(9.9f, 0.01f);
            result.ObjetoscOpadu300lsha.Should().BeApproximately(21.6f, 0.01f);
        }

        [Fact]
        public async Task WhenGeometryHasErrorStatusShouldIndicateThat_Test()
        {
            // Arrange
            var input = new InboundDto
            {
                PowierzchniaZlewni = 800.0f,
                GlebokoscOgroduDeszczowego = 0.5f,
                GlebokoscWolna = 0.7f,
                QSplywuDla15lsha = 1.2f,
                QSplywuDla130lsha = 11.0f,
                QSplywuDla300lsha = 24.0f
            };

            var sut = new WaterCalculator();

            // Act

            var result = await sut.Calculate(input);

            // Assert

            result.CalculationStatus.Should().Be(CalculationStatus.GeometriaBledna);
        }

        [Theory]
        [InlineData(10.1, 1.2, 1.3)]
        [InlineData(1.4, 1.2, 1.3)]
        [InlineData(1.25, 1.2, 1.3)]
        [InlineData(1.1, 1.35, 1.3)]
        public async Task WhenFlowHasErrorStatusShouldIndicateThat_Test(float qSplywuDla15lsha, float qSplywuDla130lsha, float QSplywuDla300lsha)
        {
            // Arrange
            var input = new InboundDto
            {
                PowierzchniaZlewni = 800.0f,
                GlebokoscOgroduDeszczowego = 0.5f,
                GlebokoscWolna = 0.1f,
                QSplywuDla15lsha = qSplywuDla15lsha,
                QSplywuDla130lsha = qSplywuDla130lsha,
                QSplywuDla300lsha = QSplywuDla300lsha
            };

            var sut = new WaterCalculator();

            // Act

            var result = await sut.Calculate(input);

            // Assert

            result.CalculationStatus.Should().Be(CalculationStatus.BlednePrzeplywy);
        }
    }
}
