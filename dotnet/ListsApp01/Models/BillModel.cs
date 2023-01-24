using System;
using System.Collections.Generic;

namespace ListsApp01.Models
{
    public class BillModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public DateTime Month { get; set; }
        public double Value { get; set; }
        public double Amount { get; set; }
        public string Group { get; set; }

    }

    public class BillList
    {
        public List<BillModel> BilssList { get; } = new();
    }
}
