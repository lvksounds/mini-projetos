using Microsoft.EntityFrameworkCore;

namespace ListsApp01.data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}
