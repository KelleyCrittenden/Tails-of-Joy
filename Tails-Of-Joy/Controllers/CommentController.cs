using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tails_Of_Joy.Repositories;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Controllers
{
    [Authorize]
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
        [HttpGet("GetAllCommentsByPost/{id}")]
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

            _commentRepository.AddComment(comment);
            //produces a status code of 201, which means userProfile object created sucessfully
            return CreatedAtAction("Get", new { id = comment.Id }, comment);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentRepository.DeleteComment(id);
            //return status 204
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }
            _commentRepository.UpdateComment(comment);
            return NoContent();
        }
    }
}
