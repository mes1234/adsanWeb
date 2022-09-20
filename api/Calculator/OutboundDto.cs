using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public readonly record struct OutboundDto
    {
        /// <summary>
        /// Minimalna Powierzchnia [m2]
        /// </summary>
        public double MinPowierzchnia { get; init; }

        /// <summary>
        /// Objetosc opadu PierwszaFala [m3]
        /// </summary>
        public double ObjetoscOpaduPierwszaFala { get; init; }

        /// <summary>
        /// Objetosc opadu 130l/sha [m3]
        /// </summary>
        public double ObjetoscOpadu130lsha { get; init; }

        /// <summary>
        /// Objetosc opadu 300l/sha [m3]
        /// </summary>
        public double ObjetoscOpadu300lsha { get; init; }

        /// <summary>
        /// Objetosc ogrodu deszczowego [m3]
        /// </summary>
        public double ObjetoscOgroduDeszczowego { get; init; }

        /// <summary>
        /// Wyniki dla pierwszej fali
        /// </summary>
        public bool StatusPierwszaFala { get; init; }

        /// <summary>
        /// Wyniki dla 130l/sha
        /// </summary>
        public bool StatusOpad130lsha { get; init; }

        /// <summary>
        /// Wyniki dla 300l/sha
        /// </summary>
        public bool StatusOpad300lsha { get; init; }

        /// <summary>
        /// Status obliczen
        /// </summary>
        public CalculationStatus CalculationStatus { get; init; }
    }

    public enum CalculationStatus
    {
        Ok = 1,
        GeometriaBledna = 2,
        BlednePrzeplywy = 3
    }
}
