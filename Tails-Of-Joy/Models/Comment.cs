using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tails_Of_Joy.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public int UserProfileId { get; set; }
        public string Content { get; set; }
        public DateTime CreateDateTime { get; set; }
        public Post Post { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
