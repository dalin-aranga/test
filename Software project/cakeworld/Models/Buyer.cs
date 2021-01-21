using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace cakeworld.Models
{
    public class Buyer
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="Name must be enterted")]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string Passwerd { get; set; }
        public string RePasswerd { get; set; }
    }
}
