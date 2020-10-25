using System.Collections.Generic;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void DeletePost(int id);
        List<Post> GetAllPosts();
        List<Post> GetAllPostsByUserId(int userProfileId);
        Post GetPostById(int id);
        Post GetUserPostById(int id, int userProfileId);
        List<Post> GetUserPostsById(int userProfileId);
        void UpdatePost(Post post);
    }
}