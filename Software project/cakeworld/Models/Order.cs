using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cakeworld.Models
{
    public class Order
    {
        public string OrderId { get; set; }
        public string CustomerId { get; set; }
        public string Quantity { get; set; }
        public string RequiredDate { get; set; }
        public string OrderDate { get; set; }
        public string OrderNumber { get; set; }
    }
}
