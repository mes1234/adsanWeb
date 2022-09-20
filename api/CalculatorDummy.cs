using System.IO;
using System.Net;
using System.Threading.Tasks;
using Calculator;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace Adsan
{
    public class CalculatorDummy
    {
        private readonly ILogger<CalculatorDummy> _logger;
        private readonly IWaterCalculator _calculator;

        public CalculatorDummy(
            ILogger<CalculatorDummy> log,
            IWaterCalculator calculator)
        {
            _logger = log;
            _calculator = calculator;
        }

        [FunctionName("Function1")]
        [OpenApiOperation(operationId: "Run", tags: new[] { "name" })]
        [OpenApiRequestBody("application/json", typeof(InboundDto), Description = "JSON request body containing { data1}")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(OutboundDto), Description = "The OK response")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.BadRequest, contentType: "text/plain", bodyType: typeof(string), Description = "Bad response")]
        public async Task<OutboundDto> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] InboundDto req, HttpRequest reqDetails)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            return await _calculator.Calculate(req).ConfigureAwait(false);
        }
    }
}

