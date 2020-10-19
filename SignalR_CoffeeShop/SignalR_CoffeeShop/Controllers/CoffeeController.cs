using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR_CoffeeShop.Hubs;
using SignalR_CoffeeShop.Models;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace SignalR_CoffeeShop.Controllers
{
    [Route("[controller]")]
    public class CoffeeController : ControllerBase
    {
        private readonly IHubContext<CoffeeHub> coffeeHub;

        public CoffeeController(IHubContext<CoffeeHub> coffeeHub)
        {
            this.coffeeHub = coffeeHub;
        }

        [HttpPost]
        public async Task<IActionResult> OrderCoffee([FromBody]Order order)
        {
            await coffeeHub.Clients.All.SendAsync("NewOrder", order); //you can access hubs from anywhere...
            return Accepted(1);
        }
    }
}