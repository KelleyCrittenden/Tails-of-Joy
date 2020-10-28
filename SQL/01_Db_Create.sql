USE [master]

IF db_id('TailsOfJoy') IS NULL
  CREATE DATABASE [TailsOfJoy]
GO

USE [TailsOfJoy]
GO


DROP TABLE IF EXISTS [Animal];
DROP TABLE IF EXISTS [Adoption];
DROP TABLE IF EXISTS [Comment];
DROP TABLE IF EXISTS [Post];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [UserType];
GO


CREATE TABLE [UserType] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(20) NOT NULL
)

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FirebaseUserId] NVARCHAR(28) NOT NULL,
  [Username] nvarchar(50) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL,
  [Bio] text NOT NULL,
  [ImageLocation] nvarchar(255),
  [UserTypeId] integer NOT NULL DEFAULT 0,
  [IsDeleted] integer NOT NULL DEFAULT 0,

  CONSTRAINT [FK_User_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id]),
  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)

CREATE TABLE [Animal] (
  [Id] integer PRIMARY KEY IDENTITY,
  [IsAdoptable] bit NOT NULL DEFAULT 1,
  [Name] nvarchar(20) NOT NULL,
  [Breed] nvarchar(50) NOT NULL,
  [Gender] nvarchar(20) NOT NULL,
  [Age] nvarchar(20) NOT NULL,
  [Size] nvarchar(20) NOT NULL,
  [ChildFriendly] bit NOT NULL DEFAULT 1,
  [SmallAnimalFriendly] bit NOT NULL DEFAULT 1,
  [Title] nvarchar(150) NOT NULL,
  [Content] text NOT NULL,
  [ImageLocation] nvarchar(255) NOT NULL,
)

CREATE TABLE [Adoption] (
  [Id] integer PRIMARY KEY IDENTITY,
  [AnimalId] integer NOT NULL,
  [UserProfileId] integer NOT NULL,
  [IsApproved] integer NOT NULL DEFAULT 0,

  CONSTRAINT [FK_Adoption_Animal] FOREIGN KEY ([AnimalId]) REFERENCES [Animal] ([Id]),
  CONSTRAINT [FK_Adoption_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)

CREATE TABLE [Post] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Title] nvarchar(255) NOT NULL,
  [Content] text NOT NULL,
  [ImageLocation] nvarchar(255),
  [CreateDateTime] datetime NOT NULL,
  [UserProfileId] integer NOT NULL,
  [IsDeleted] integer NOT NULL DEFAULT 0,

  CONSTRAINT [FK_Post_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)

CREATE TABLE [Comment] (
  [Id] integer PRIMARY KEY IDENTITY,
  [PostId] integer NOT NULL,
  [UserProfileId] integer NOT NULL,
  [Content] text NOT NULL,
  [CreateDateTime] datetime NOT NULL,

  CONSTRAINT [FK_Comment_Post] FOREIGN KEY ([PostId]) REFERENCES [Post] ([Id]),
  CONSTRAINT [FK_Comment_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)

GO