using Microsoft.AspNet.Mvc;

namespace <%= projectName %> 
{
    public class DefaultController 
    {
        public IActionResult Index()
        {
            return this.View();
        }
    }
}