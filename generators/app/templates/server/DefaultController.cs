using Microsoft.AspNetCore.Mvc;

namespace <%= projectName %> 
{
    public class DefaultController : Controller
    {
        public IActionResult Index()
        {
            return this.View();
        }
    }
}