using ListsApp01.data;
using ListsApp01.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ListsApp01.Controllers
{
    public class TesteCrudController : Controller
    {
        private readonly AppDbContext _contexto;

        public TesteCrudController(AppDbContext contexto)
        {
            _contexto = contexto;
        }

        public IActionResult Index()
        {
            var conta = new Bill
            {
                Id = 1,
                Description = "Ida ao mercado",
                Date = DateTime.Now.ToString("dd/MM/yyyy"),
                Month = DateTime.Now.ToString("MMM"),
                Value = 40.80,
                Categorie = "Supermercado",
                TotalItens = 10,
            };

            _contexto.Add(conta);
            _contexto.SaveChanges();

            return View();
        }
    }
}
