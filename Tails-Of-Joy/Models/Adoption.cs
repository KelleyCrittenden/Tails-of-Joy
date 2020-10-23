using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tails_Of_Joy.Models
{
    public class Adoption
    {
        public int Id { get; set; }
        public int AnimalId { get; set; } 
        public int UserProfileId { get; set; }
        public int IsApproved { get; set; }
        public Animal Animal { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
