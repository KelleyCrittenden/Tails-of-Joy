USE [TailsOfJoy];

GO


set identity_insert [UserType] on

insert into [UserType] ([ID], [Name]) VALUES (1, 'Admin'), (2, 'User');
set identity_insert [UserType] off


set identity_insert [UserProfile] on

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (1, 'Ap4P7PjKl2RIgUjvC8YwrVueLY42', 'ADMIN', 'Kelley', 'Crittenden', 'admin@admin.com', 'Owner of Tails of Joy', 'https://robohash.org/numquamutut.png?size=150x150&set=set1', 1, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (2, 'JXO3kD2t3xaRIkZ5TdMpcG7irrN2', 'UserOne', 'User', 'One', 'userone@userone.com', 'Description of User One', 'https://robohash.org/nisiautemet.png?size=150x150&set=set1', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (3, 'S457dChnWtP2b09pYjqDfH1MgWp1', 'UserTwo', 'User', 'Two', 'usertwo@usertwo.com', 'Description of User Two', 'https://robohash.org/hicnihilipsa.png?size=150x150&set=set1', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (4, '5GX3PlPUoebLKosyT4rrsPn7kdx1', 'UserThree', 'User', 'Three', 'userthree@userthree.com', 'Description of User Three', 'https://robohash.org/deseruntutipsum.png?size=150x150&set=set1', 2, 0);

set identity_insert [UserProfile] off


set identity_insert [Post] on

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (1, 'First Dog Adopted Title', 'First Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-01', 1, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (2, 'Second Dog Adopted Title', 'Second Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-02', 1, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (3, 'Third Dog Adopted Title', 'Third Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-03', 2, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (4, 'Fourth Dog Adopted Title', 'Fourth Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-04', 2, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (5, 'Fifth Dog Adopted Title', 'Fifth Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-05', 3, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (6, 'Sixth Dog Adopted Title', 'Sixth Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-06', 3, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (7, 'Seventh Dog Adopted Title', 'Seventh Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-07', 4, 0);

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (8, 'Eigth Dog Adopted Title', 'Eight Dog Adopted Content', 'https://picsum.photos/920/360', '2019-08-08', 4, 0);

set identity_insert [Post] off


set identity_insert [Comment] on

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (1, 1, 2, 'First Comment, First Post, Second User Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-05-19');

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (2, 1, 3, 'Second Comment, First Post, Third User, Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-05-11');

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (3, 1, 4, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-07-01');

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (4, 3, 2, 'First Comment, First Post, Second User Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-05-19');

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (5, 3, 3, 'Second Comment, First Post, Third User, Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-05-11');

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (6, 2, 4, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-07-01');

set identity_insert [Comment] off


set identity_insert [Animal] on

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (1, 1, 'Bishop Grey', 'Dog', 'Female', 'Young', 'Small', 0, 0, 'Spunky Girl with Lots of Attitude', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://picsum.photos/920/360');

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (2, 1, 'Remy LeBeau', 'Dog', 'Male', 'Adult', 'X-Large', 0, 0, 'Gentle Giant, sweet boy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://picsum.photos/920/360');

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (3, 1, 'Mya', 'Dog', 'Female', 'Senior', 'Medium', 1, 1, 'Independent Senior Girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://picsum.photos/920/360');

set identity_insert [Animal] off


set identity_insert [Adoption] on

insert into Adoption (Id, AnimalId, UserProfileId, IsApproved) values (1, 1, 1, 2)

set identity_insert [Adoption] off
