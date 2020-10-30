using System.Collections.Generic;
using System.Data;
using System.Security.Cryptography;
using Microsoft.Extensions.Configuration;
using Tails_Of_Joy.Models;
using Tails_Of_Joy.Utils;

namespace Tails_Of_Joy.Repositories
{
    public class AdoptionRepository : BaseRepository, IAdoptionRepository
    {
        public AdoptionRepository(IConfiguration config) : base(config) { }

        //List of All Approved Adoptions by UserID
        public List<Adoption> GetAllAdoptionsByUserProfileId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ad.Id, ad.AnimalId, ad.UserProfileId, ad.IsApproved, a.Name, a.ImageLocation, up.FirstName, up.LastName, up.ImageLocation
                            FROM Adoption ad
                            LEFT JOIN Animal a ON ad.AnimalId = a.Id
                            LEFT JOIN UserProfile up ON ad.UserProfileId = up.Id
                            WHERE up.Id = @userProfileId AND ad.IsApproved = 2";

                    cmd.Parameters.AddWithValue("@userProfile", id);

                    var adoptions = new List<Adoption>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        Adoption adoption = new Adoption()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            AnimalId = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            Animal = new Animal
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            },
                            UserProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            }

                        };


                        adoptions.Add(adoption);
                    }
                    reader.Close();
                    return adoptions;
                }
            }
        }

        public List<Adoption> GetAllApprovedAdoptions()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ad.Id, ad.AnimalId, ad.UserProfileId, ad.IsApproved, a.Name, a.ImageLocation, up.FirstName, up.LastName, up.ImageLocation
                            FROM Adoption ad
                            LEFT JOIN Animal a ON ad.AnimalId = a.Id
                            LEFT JOIN UserProfile up ON ad.UserProfileId = up.Id
                            WHERE ad.IsApproved = 2";

                    var adoptions = new List<Adoption>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        Adoption adoption = new Adoption()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            AnimalId = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            Animal = new Animal
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            },
                            UserProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            }

                        };

                        adoptions.Add(adoption);
                    }
                    reader.Close();
                    return adoptions;
                }
            }
        }

        public List<Adoption> GetAllPendingAdoptions()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ad.Id, ad.AnimalId, ad.UserProfileId, ad.IsApproved, a.Name, a.ImageLocation, up.FirstName, up.LastName, up.ImageLocation
                            FROM Adoption ad
                            LEFT JOIN Animal a ON ad.AnimalId = a.Id
                            LEFT JOIN UserProfile up ON ad.UserProfileId = up.Id
                            WHERE ad.IsApproved = 0";

                    var adoptions = new List<Adoption>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        Adoption adoption = new Adoption()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            AnimalId = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            Animal = new Animal
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            },
                            UserProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            }

                        };


                        adoptions.Add(adoption);
                    }
                    reader.Close();
                    return adoptions;
                }
            }
        }

        public void Add(Adoption adoption)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Adoption(AnimalId, UserProfileId)
                        OUTPUT INSERTED.ID
                        VALUES (@animalId, @userProfileId)";

                    DbUtils.AddParameter(cmd, "animalId", adoption.AnimalId);
                    DbUtils.AddParameter(cmd, "userProfileId", adoption.UserProfileId);

                    adoption.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        // Changing IsApproved to 1 = Not Approved
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Adoption
                        SET IsApproved = @isApproved
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "isApproved", 1);
                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        // Changing IsApproved to 2 = Is Approved
        public void Update(Adoption adoption)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Adoption
                        SET IsApproved = @isApproved
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@id", adoption.Id);
                    DbUtils.AddParameter(cmd, "isApproved", 2);

                    cmd.ExecuteNonQuery();
                }
             }
        }

        public Adoption GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ad.id, ad.AnimalId, ad.UserProfileId, ad.IsApproved, a.Name, a.ImageLocation, up.FirstName, up.LastName, up.ImageLocation
                            FROM Adoption ad
                            LEFT JOIN Animal a ON ad.AnimalId = a.id
                            LEFT JOIN UserProfile up on ad.UserProfileId = up.id
                            WHERE ad.id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Adoption adoption = new Adoption()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            AnimalId = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            IsApproved = reader.GetInt32(reader.GetOrdinal("IsApproved")),
                            Animal = new Animal
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("AnimalId")),
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            },
                            UserProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation"))
                            }
                        }; 
                        reader.Close();
                        return adoption;
                    }
                    reader.Close();
                    return null;
                }
            }
        }


    }
}

