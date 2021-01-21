using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace cakeworld.Models

    {
        public class OnlineDBContext : DbContext
        {
            public OnlineDBContext(DbContextOptions<OnlineDBContext> options)
            : base(options)

            {
            }


            public DbSet<Seller> Sellers { get; set; }
            public DbSet<Buyer> Buyers { get; set; }
            public DbSet<Order> Orders { get; set; }
            public DbSet<Cake> Cakes { get; set; }
    }
    }



