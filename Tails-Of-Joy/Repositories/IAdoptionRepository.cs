using System.Collections.Generic;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Repositories
{
    public interface IAdoptionRepository
    {
        void Add(Adoption adoption);
        void Delete(int id);
        Adoption GetById(int id);
        List<Adoption> GetAllAdoptionsByUserProfileId(int id);
        List<Adoption> GetAllApprovedAdoptions();
        List<Adoption> GetAllPendingAdoptions();
        void Update(Adoption adoption);
    }
}