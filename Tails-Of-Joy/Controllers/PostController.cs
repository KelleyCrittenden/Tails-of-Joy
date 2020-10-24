using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tails_Of_Joy.Models;
using Tails_Of_Joy.Repositories;

namespace Tails_Of_Joy.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly IPostRepository _postRepository;



        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {

            return Ok(_postRepository.GetAllPosts());
        }


        [HttpGet("User/{id}")]
        public IActionResult GetbyUser(int id)
        {
            return Ok(_postRepository.GetUserPostsById(id));
        }


        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);

            return CreatedAtAction("Get", new { id = post.Id }, post);
        }


        [HttpPut("edit/{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();

            }

            _postRepository.UpdatePost(post);
            return NoContent();
        }



        [HttpPut("delete/{id}")]
        public IActionResult Delete(int id)
        {

            _postRepository.DeletePost(id);
            return NoContent();
        }
    }
}