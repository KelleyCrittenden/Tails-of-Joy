using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tails_Of_Joy.Models
{
    public class Animal
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public string Age { get; set; }
        public string ImageLocation { get; set; }
        public string Size { get; set; }
        public bool IsAdoptable { get; set; }
        public bool ChildFriendly { get; set; }
        public bool SmallAnimalFriendly { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
      public Adoption Adoption { get; set; }
    }
}
