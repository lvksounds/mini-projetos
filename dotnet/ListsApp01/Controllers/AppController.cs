using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace ListsApp01.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("add-categorie")]
        public IActionResult AddCategorie()
        {
            return View();
        }

    }
}
