﻿using System.Collections.Generic;
using Tails_Of_Joy.Models;

namespace Tails_Of_Joy.Repositories
{
    public interface IUserProfileRepository
        {
            void Add(UserProfile userProfile);
            UserProfile GetByFirebaseUserId(string firebaseUserId);
        }
}