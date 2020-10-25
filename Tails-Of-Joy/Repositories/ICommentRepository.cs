using System.Collections.Generic;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Repositories
{
    public interface ICommentRepository
    {
        void AddComment(Comment comment);
        void DeleteComment(int id);
        List<Comment> GetAllComments();
        List<Comment> GetAllCommentsByPostId(int id);
        Comment GetCommentById(int id);
        void UpdateComment(Comment comment);
    }
}