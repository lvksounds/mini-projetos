using ListsApp01.Models;
using Microsoft.EntityFrameworkCore;
namespace ListsApp01.data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        // instancia da classe que queremos mapear;
        public DbSet<Bill> Bills { get; set; }
    }
}
