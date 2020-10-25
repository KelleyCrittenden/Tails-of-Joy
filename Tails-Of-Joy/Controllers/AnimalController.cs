using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tails_Of_Joy.Models;
using Tails_Of_Joy.Repositories;

namespace Tails_Of_Joy.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly IAnimalRepository _animalRepository;
        public AnimalController(IAnimalRepository animalRepository)
        {
            _animalRepository = animalRepository;
        }

        //Displaying All the Available Animals
        // GET: api/<AnimalController>
        [HttpGet]
        public IActionResult GetAllAvailableAnimals()
        {
            return Ok(_animalRepository.GetAllAvailableAnimals());
        }


        //Displaying All the Adopted Animals
        // GET: api/<AnimalController>
        [HttpGet("adopted")]
        public IActionResult GetAllAdoptedAnimals()
        {
            return Ok(_animalRepository.GetAllAdoptedAnimals());
        }



        //Displaying details of one Animal
        // GET api/<AnimalController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var animal = _animalRepository.GetById(id);
            if(animal != null)
            {
                NotFound();
            }
            return Ok(animal);
        }


        // Adding a new animal
        // POST api/<AnimalController>
        [HttpPost]
        public IActionResult Post(Animal animal)
        {
            _animalRepository.Add(animal);
            return CreatedAtAction("Get", new { id = animal.Id }, animal);
        }


        // Editing a Single Animal
        // PUT api/<AnimalController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Animal animal)
        {
            if (id != animal.Id)
            {
                return BadRequest();
            }
            _animalRepository.Update(animal);
            return NoContent();
        }


        // Updating Animal from Available to Adopted
        // DELETE api/<AnimalController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _animalRepository.Delete(id);
            return Ok(id);
        }
    }
}
