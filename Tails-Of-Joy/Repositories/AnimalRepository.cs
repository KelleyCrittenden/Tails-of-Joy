using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Tails_Of_Joy.Models;
using Tails_Of_Joy.Utils;

namespace Tails_Of_Joy.Repositories
{
    public class AnimalRepository : BaseRepository, IAnimalRepository
    {
        public AnimalRepository(IConfiguration config) : base(config) { }

        public List<Animal> GetAllAvailableAnimals()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation
                        FROM Animal
                        WHERE IsAdoptable = 1
                        ORDER BY Name ASC";

                    var reader = cmd.ExecuteReader();

                    var animals = new List<Animal>();

                    while (reader.Read())
                    {
                        animals.Add(new Animal()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            IsAdoptable = reader.GetBoolean(reader.GetOrdinal("IsAdoptable")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Breed = reader.GetString(reader.GetOrdinal("Breed")),
                            Gender = reader.GetString(reader.GetOrdinal("Gender")),
                            Age = reader.GetString(reader.GetOrdinal("Age")),
                            Size = reader.GetString(reader.GetOrdinal("Size")),
                            ChildFriendly = reader.GetBoolean(reader.GetOrdinal("ChildFriendly")),
                            SmallAnimalFriendly = reader.GetBoolean(reader.GetOrdinal("SmallAnimalFriendly")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Content = reader.GetString(reader.GetOrdinal("Content")),
                            ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation")),
                        });

                    }

                    reader.Close();
                    return animals;
                }
            }
        }

        public List<Animal> GetAllAdoptedAnimals()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                               SELECT Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation
                                FROM Animal
                                WHERE IsAdoptable = 0
                                ORDER BY Name ASC";

                    var reader = cmd.ExecuteReader();

                    var animals = new List<Animal>();

                    while (reader.Read())
                    {
                        animals.Add(new Animal()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            IsAdoptable = reader.GetBoolean(reader.GetOrdinal("IsAdoptable")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Breed = reader.GetString(reader.GetOrdinal("Breed")),
                            Gender = reader.GetString(reader.GetOrdinal("Gender")),
                            Age = reader.GetString(reader.GetOrdinal("Age")),
                            Size = reader.GetString(reader.GetOrdinal("Size")),
                            ChildFriendly = reader.GetBoolean(reader.GetOrdinal("ChildFriendly")),
                            SmallAnimalFriendly = reader.GetBoolean(reader.GetOrdinal("SmallAnimalFriendly")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Content = reader.GetString(reader.GetOrdinal("Content")),
                            ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation")),
                        });

                    }

                    reader.Close();
                    return animals;
                }
            }
        }

        public void Add(Animal animal)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            INSERT INTO Animal (IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation)
                            OUTPUT INSERTED.ID
                            VALUES (@isAdoptable, @name, @breed, @gender, @age, @size, @childFriendly, @smallAnimalFriendly, @title, @content, @imageLocation)";

                    DbUtils.AddParameter(cmd, "@isAdoptable", animal.IsAdoptable);
                    DbUtils.AddParameter(cmd, "@name", animal.Name);
                    DbUtils.AddParameter(cmd, "@breed", animal.Breed);
                    DbUtils.AddParameter(cmd, "@gender", animal.Gender);
                    DbUtils.AddParameter(cmd, "@age", animal.Age);
                    DbUtils.AddParameter(cmd, "@size", animal.Size);
                    DbUtils.AddParameter(cmd, "@childFriendly", animal.ChildFriendly);
                    DbUtils.AddParameter(cmd, "@smallAnimalFriendly", animal.SmallAnimalFriendly);
                    DbUtils.AddParameter(cmd, "@title", animal.Title);
                    DbUtils.AddParameter(cmd, "@content", animal.Content);
                    DbUtils.AddParameter(cmd, "@ImageLocation", animal.ImageLocation);

                    animal.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        //Updated Animal Database Column to change animal to not being available to adopt
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Animal
                            SET IsAdoptable = @isAdoptable
                            Where Id = @id
                            ";
                    DbUtils.AddParameter(cmd, "isAdoptable", 0);
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    

        public void Update(Animal animal)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Animal
                        SET
                        IsAdoptable = @isAdoptable,
                        Name = @name,
                        Breed = @breed,
                        Gender = @gender,
                        Age = @age,
                        Size = @size,
                        ChildFriendly = @childFriendly,
                        SmallAnimalFriendly = @smallAnimalFriendly,
                        Title = @title,
                        Content = @content,
                        ImageLocation = @imageLocation
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@isAdoptable", animal.IsAdoptable);
                    DbUtils.AddParameter(cmd, "@name", animal.Name);
                    DbUtils.AddParameter(cmd, "@breed", animal.Breed);
                    DbUtils.AddParameter(cmd, "@gender", animal.Gender);
                    DbUtils.AddParameter(cmd, "@age", animal.Age);
                    DbUtils.AddParameter(cmd, "@size", animal.Size);
                    DbUtils.AddParameter(cmd, "@childFriendly", animal.ChildFriendly);
                    DbUtils.AddParameter(cmd, "@smallAnimalFriendly", animal.SmallAnimalFriendly);
                    DbUtils.AddParameter(cmd, "@title", animal.Title);
                    DbUtils.AddParameter(cmd, "@content", animal.Content);
                    DbUtils.AddParameter(cmd, "@imageLocation", animal.ImageLocation);
                    DbUtils.AddParameter(cmd, "@id", animal.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public Animal GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation
                            FROM Animal
                            WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Animal animal = new Animal()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            IsAdoptable = reader.GetBoolean(reader.GetOrdinal("IsAdoptable")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Breed = reader.GetString(reader.GetOrdinal("Breed")),
                            Gender = reader.GetString(reader.GetOrdinal("Gender")),
                            Age = reader.GetString(reader.GetOrdinal("Age")),
                            Size = reader.GetString(reader.GetOrdinal("Size")),
                            ChildFriendly = reader.GetBoolean(reader.GetOrdinal("ChildFriendly")),
                            SmallAnimalFriendly = reader.GetBoolean(reader.GetOrdinal("SmallAnimalFriendly")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Content = reader.GetString(reader.GetOrdinal("Content")),
                            ImageLocation = reader.GetString(reader.GetOrdinal("ImageLocation")),
                        };
                        reader.Close();
                        return animal;
                    }
                    reader.Close();
                    return null;
                }
            }
        }


    }
}

