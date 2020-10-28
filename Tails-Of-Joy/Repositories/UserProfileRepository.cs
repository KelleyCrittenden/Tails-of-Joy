using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Tails_Of_Joy.Models;
using Tails_Of_Joy.Utils;

namespace Tails_Of_Joy.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }
        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.FirebaseUserId, up.Username, up.FirstName, up.LastName, up.Email, up.Bio, up.ImageLocation, up.UserTypeId, up.IsDeleted,
                               ut.Name AS UserTypeName
                          FROM UserProfile up
                               LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                         WHERE FirebaseUserId = @FirebaseuserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Bio = DbUtils.GetString(reader, "Bio"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            IsDeleted = DbUtils.GetInt(reader, "IsDeleted"),

                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "UserTypeName"),
                            }

                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    INSERT INTO UserProfile (FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted)
                                    OUTPUT INSERTED.ID
                                    VALUES (@FirebaseUserId, @Username, @FirstName, @LastName, @Email, @Bio, @ImageLocation, @UserTypeId, @isDeleted)";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@Username", userProfile.Username);
                    DbUtils.AddParameter(cmd, "@FirstName", userProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", userProfile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@Bio", userProfile.Bio);
                    DbUtils.AddParameter(cmd, "@ImageLocation", userProfile.ImageLocation);
                    DbUtils.AddParameter(cmd, "@UserTypeId", userProfile.UserTypeId);
                    DbUtils.AddParameter(cmd, "@IsDeleted", userProfile.IsDeleted);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public UserProfile GetUserProfileById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.FirebaseUserId, up.Username, up.FirstName, up.LastName, up.Email, up.Bio, up.ImageLocation, up.UserTypeId, up.IsDeleted, ut.Name AS UserTypeName
                        FROM UserProfile up
                        LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                        WHERE up.id = @id AND up.IsDeleted = 0
                        
                       ";

                    cmd.Parameters.AddWithValue("@id", id);
                    UserProfile userProfile = new UserProfile();
                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Bio = DbUtils.GetString(reader, "Bio"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                            IsDeleted = reader.GetInt32(reader.GetOrdinal("IsDeleted")),
                            UserType = new UserType()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                            },

                        };
                    }

                    reader.Close();

                    return userProfile;
                }
            }
        }

        public List<UserProfile> GetAllUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.FirebaseUserId, up.Username, up.FirstName, up.LastName, up.Email, up.Bio, up.ImageLocation, up.UserTypeId, up.IsDeleted, ut.Name AS UserTypeName
                        FROM UserProfile u
                        LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        ORDER BY u.DisplayName;
                       ";


                    List<UserProfile> userProfiles = new List<UserProfile>();
                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        userProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Bio = DbUtils.GetString(reader, "Bio"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                            IsDeleted = reader.GetInt32(reader.GetOrdinal("IsDeleted")),
                            UserType = new UserType()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                            },

                        });
                    }

                    reader.Close();

                    return userProfiles;
                }
            }
        }

        public void UpdateUserProfile(UserProfile userProfile)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile
                        SET
                            FirebaseUserId = @firebaseUserId,
                            Username = @username,
                            FirstName = @firstName,
                            LastName = @lastName,
                            Email = @email,
                            Bio = @bio,
                            ImageLocation = @imageLocation,
                            UserTypeId = @userTypeId,
                            IsDeleted = @isDeleted
                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@firebaseUserId", userProfile.FirebaseUserId);
                    cmd.Parameters.AddWithValue("@username", userProfile.Username);
                    cmd.Parameters.AddWithValue("@firstName", userProfile.FirstName);
                    cmd.Parameters.AddWithValue("@lastName", userProfile.LastName);
                    cmd.Parameters.AddWithValue("@email", userProfile.Email);
                    cmd.Parameters.AddWithValue("@bio", userProfile.Bio);
                    cmd.Parameters.AddWithValue("@imageLocation", userProfile.ImageLocation);
                    cmd.Parameters.AddWithValue("@userTypeId", userProfile.UserTypeId);
                    cmd.Parameters.AddWithValue("@isDeleted", userProfile.IsDeleted);

                    cmd.Parameters.AddWithValue("@id", userProfile.Id);


                    cmd.ExecuteNonQuery();

                }
            }
        }

        public void DeleteUserProfile(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile
                        SET
                        IsDeleted = @isDeleted
                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@isDeleted", 1);
                    cmd.Parameters.AddWithValue("@id", id);


                    cmd.ExecuteNonQuery();

                }
            }

        }



    }
}
