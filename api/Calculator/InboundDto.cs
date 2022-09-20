using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public record InboundDto
    {
        /// <summary>
        /// Powierzchnia zlewnik [m2]
        /// </summary>
        public double PowierzchniaZlewni { get; set; }

        /// <summary>
        /// Glebokosc wolna [m]
        /// </summary>
        public double GlebokoscWolna { get; set; }

        /// <summary>
        /// Glebokosc ogrodu deszczowego [m]
        /// </summary>
        public double GlebokoscOgroduDeszczowego { get; set; }

        /// <summary>
        /// Q splywu dla 15l/sha
        /// </summary>
        public double QSplywuDla15lsha { get; set; }

        /// <summary>
        /// Q splywu dla 130l/sha
        /// </summary>
        public double QSplywuDla130lsha { get; set; }

        /// <summary>
        /// Q splywu dla 300l/sha
        /// </summary>
        public double QSplywuDla300lsha { get; set; }
    }
}
