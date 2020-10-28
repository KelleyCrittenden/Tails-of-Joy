using System.Collections.Generic;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void DeleteUserProfile(int id);
        List<UserProfile> GetAllUserProfiles();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetUserProfileById(int id);
        void UpdateUserProfile(UserProfile userProfile);
    }
}