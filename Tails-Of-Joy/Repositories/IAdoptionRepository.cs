using System.Collections.Generic;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Repositories
{
    public interface IAdoptionRepository
    {
        void Add(Adoption adoption);
        void Delete(int id);
        void GetAdoptionById(int id);
        List<Adoption> GetAllAdoptionsByUserProfileId(int id);
        List<Adoption> GetAllApprovedAdoptions(int id);
        List<Adoption> GetAllPendingAdoptions(int id);
        void Update(Adoption adoption);
    }
}