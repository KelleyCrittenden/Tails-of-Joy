﻿using System.Collections.Generic;
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
                        SELECT up.Id, up.FirebaseUserId, up.Username, up.FirstName, up.LastName, up.Email, up.Bio, up.ImageLocation, up.UserTypeId,
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
                                    INSERT INTO UserProfile (FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId)
                                    OUTPUT INSERTED.ID
                                    VALUES (@FirebaseUserId, @Username, @FirstName, @LastName, @Email, @Bio, @ImageLocation, @UserTypeId)";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@Username", userProfile.Username);
                    DbUtils.AddParameter(cmd, "@FirstName", userProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", userProfile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@Bio", userProfile.Bio);
                    DbUtils.AddParameter(cmd, "@ImageLocation", userProfile.ImageLocation);
                    DbUtils.AddParameter(cmd, "@UserTypeId", userProfile.UserTypeId);

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
                        SELECT up.Id, up.FirebaseUserId, up.Username, up.FirstName, up.LastName, up.Email, up.Bio, up.ImageLocation, up.UserTypeId,
                               ut.Name AS UserTypeName
                         FROM UserProfile u
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        WHERE u.id = @id
                        
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
                        SELECT up.Id, up.FirebaseUserId, up.Username, up.FirstName, up.LastName, up.Email, up.Bio, up.ImageLocation, up.UserTypeId,
                               ut.Name AS UserTypeName
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



    }
}
