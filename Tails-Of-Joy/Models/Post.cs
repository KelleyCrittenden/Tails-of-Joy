using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tails_Of_Joy.Models
{
    public class Post
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public DateTime CreateDateTime { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImageLocation { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
