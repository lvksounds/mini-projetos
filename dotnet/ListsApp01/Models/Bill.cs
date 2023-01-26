using System;
using System.Collections.Generic;

namespace ListsApp01.Models
{
    public class Bill
    {
        public int Id { get; set; }
        public string Description = "Testando";
        public string Date { get; set; }
        public string Month { get; set; }
        public double Value { get; set; }
        public double Amount { get; set; }
        public string Categorie { get; set; }
        public int TotalItens { get; set; }
        public List<Bill> BilssList { get; } = new();

    }   
}
