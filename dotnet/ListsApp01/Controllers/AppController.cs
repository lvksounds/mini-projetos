using Microsoft.AspNetCore.Mvc;

namespace ListsApp01.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
