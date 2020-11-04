using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tails_Of_Joy.Repositories;
using Tails_Of_Joy.Models;
using System.Security.Claims;

namespace Tails_Of_Joy.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public CommentController(ICommentRepository commentRepository, IUserProfileRepository userProfileRepository)
        {
            _commentRepository = commentRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult GetAllComments()
        {
            return Ok(_commentRepository.GetAllComments());
        }

        //this will show the whole list of comments for that specific post
        [HttpGet("getAllCommentsForPost/{id}")]
        public IActionResult GetAllCommentsByPost(int id)
        {
            return Ok(_commentRepository.GetAllCommentsByPostId(id));
        }

        //this will show individual comment by commentid
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Comment comment = _commentRepository.GetCommentById(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }


        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile == null)
            {
                return Unauthorized();
            }
            _commentRepository.AddComment(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            //var currentUserProfile = GetCurrentUserProfile();
            //if (currentUserProfile == null)
            //{
            //    return Unauthorized();
            //}

            _commentRepository.DeleteComment(id);
            return NoContent();
        }

        [HttpPut]
        public IActionResult Put(Comment comment)
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile == null)
            {
                return Unauthorized();
            }
            _commentRepository.UpdateComment(comment);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
