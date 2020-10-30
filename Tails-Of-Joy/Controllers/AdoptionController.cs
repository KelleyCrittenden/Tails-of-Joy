using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Tails_Of_Joy.Models;
using Tails_Of_Joy.Repositories;

namespace Tails_Of_Joy.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdoptionController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IAdoptionRepository _adoptionRepository;
        public AdoptionController(IAdoptionRepository adoptionRepository,
            IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
            _adoptionRepository = adoptionRepository;

        }

        // Displaying All Adopted Animals Attached to the User
        // GET: api/<AdoptionController>
        [HttpGet("user/{id}")]
        public IActionResult GetbyUser(int id)
        {
            return Ok(_adoptionRepository.GetAllAdoptionsByUserProfileId(id));
        }


        // Displaying All the Pending Adoptions
        // GET: api/<AdoptionController>
        [HttpGet("pending")]
        public IActionResult GetAllPending()
        {
            return Ok(_adoptionRepository.GetAllPendingAdoptions());
        }

        // Displaying All the Approved adoptions
        // GET: api/<AdoptionController>
        [HttpGet]
        public IActionResult GetAllApproved()
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile == null)
            {
                return Unauthorized();
            }
            return Ok(_adoptionRepository.GetAllApprovedAdoptions());
        }



        //Displaying details of one Adoption
        // GET api/<AdoptionController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var adoption = _adoptionRepository.GetById(id);
            if (adoption != null)
            {
                NotFound();
            }
            return Ok(adoption);
        }


        //Adding a new adoption
        // POST api/<AdoptionController>
        [HttpPost]
        public IActionResult Post(Adoption adoption)
        {
            _adoptionRepository.Add(adoption);
            return CreatedAtAction("Get", new { id = adoption.Id }, adoption);
        }


        // Updating a Single Adoption, Approving it
        // PUT api/<AdoptionController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Adoption adoption)
        {
            if (id != adoption.Id)
            {
                return BadRequest();
            }
            _adoptionRepository.Update(adoption);
            return NoContent();
        }


        // Updating a single Adoption, Denying it
        // DELETE api/<AnimalController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _adoptionRepository.Delete(id);
            return Ok(id);
        }


        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}

