USE [TailsOfJoy];

GO


set identity_insert [UserType] on

insert into [UserType] ([ID], [Name]) VALUES (1, 'Admin'), (2, 'User');
set identity_insert [UserType] off


set identity_insert [UserProfile] on

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (1, 'Ap4P7PjKl2RIgUjvC8YwrVueLY42', 'ADMIN', 'Kelley', 'Crittenden', 'admin@admin.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in. Nunc congue nisi vitae suscipit tellus mauris. Egestas sed tempus urna et. Eget nulla facilisi etiam dignissim diam. Sollicitudin tempor id eu nisl nunc mi ipsum. Dui vivamus arcu felis bibendum ut. Scelerisque in dictum non consectetur a. Elementum facilisis leo vel fringilla est ullamcorper. Velit ut tortor pretium viverra. Sed ullamcorper morbi tincidunt ornare massa eget. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Pellentesque habitant morbi tristique senectus et netus et. Posuere sollicitudin aliquam ultrices sagittis.', 'https://robohash.org/numquamutut.png?size=150x150&set=set1', 1, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (2, 'oHltJRrORLOUjUi7tNlkq8JvMQ33', 'JakeReed33', 'Jake', 'Reed', 'jakereed@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604518579/Tails_of_Joy/enios8ora8tprdrmn8ax.jpg', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (3, 'zU2uhkmHigYhg04mT5jE0ri6NKn1', 'GregSmith55', 'Greg', 'Smith', 'gregsmith@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Non quam lacus suspendisse faucibus interdum. Quisque egestas diam in arcu cursus euismod quis. Ac tortor dignissim convallis aenean. Praesent elementum facilisis leo vel. Ultricies leo integer malesuada nunc vel risus commodo. Ullamcorper sit amet risus nullam. Sed turpis tincidunt id aliquet risus feugiat in. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604518795/Tails_of_Joy/ujzdwl7iuqoaqxw2nqsp.jpg', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (4, 'CHrN3jzv2IciTz0LZb7ydpqKElU2', 'LizThomas32', 'Liz', 'Thomas', 'lizthomas@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mattis nunc sed blandit libero volutpat sed cras ornare. Nisl suscipit adipiscing bibendum est. Donec et odio pellentesque diam volutpat commodo sed egestas. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Id aliquet risus feugiat in. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ut consequat semper viverra nam libero justo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604518937/Tails_of_Joy/zt9innu0glgba2fbtxzr.jpg', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (5, 'CHrN3jzv2IciTz0LZb7ydpqKElU2', 'LoisHarris45', 'Lois', 'Harris', 'loisharris@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Risus sed vulputate odio ut enim. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae justo eget magna fermentum iaculis eu non diam. Facilisis gravida neque convallis a cras semper auctor neque. Lobortis feugiat vivamus at augue eget arcu dictum varius. Turpis egestas maecenas pharetra convallis posuere. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Neque vitae tempus quam pellentesque nec. Et ultrices neque ornare aenean euismod elementum nisi quis. Mi bibendum neque egestas congue quisque egestas. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Lorem ipsum dolor sit amet consectetur. Libero nunc consequat interdum varius sit amet mattis. Velit laoreet id donec ultrices tincidunt arcu non. Velit ut tortor pretium viverra. Amet venenatis urna cursus eget nunc scelerisque. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519096/Tails_of_Joy/dplz2cep34cmlrujgqoq.jpg', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (6, 'o7HqHroET1QPXGuMA2Vc89bcn1K3', 'LukeJones77', 'Luke', 'Jones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Accumsan sit amet nulla facilisi. Neque aliquam vestibulum morbi blandit. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Orci eu lobortis elementum nibh. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Donec enim diam vulputate ut pharetra sit amet aliquam. In iaculis nunc sed augue lacus viverra vitae congue. Arcu cursus vitae congue mauris rhoncus aenean. Id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Mi in nulla posuere sollicitudin aliquam. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Est ultricies integer quis auctor elit sed vulputate mi sit.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519199/Tails_of_Joy/uwztkc75vgk6jr6ykrme.png', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (7, '5vVYlvgOvdT9TTIM7uWw3MFRcOs2', 'MargoPrince33', 'Margo', 'Prince', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nibh cras pulvinar mattis nunc sed blandit. Purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt. Et pharetra pharetra massa massa ultricies. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget nunc scelerisque viverra mauris in aliquam sem. Non quam lacus suspendisse faucibus interdum posuere lorem. Commodo elit at imperdiet dui accumsan sit amet nulla. Nunc sed id semper risus in. Etiam non quam lacus suspendisse faucibus interdum. Lectus quam id leo in vitae. Elit duis tristique sollicitudin nibh. Porttitor massa id neque aliquam.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519314/Tails_of_Joy/egxfzbkl3sloxoy2bdsa.jpg', 2, 0);

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (8, 'G8RwamjPdcciLUWzouEsASWhs7y2', 'MargoPrince33', 'Margo', 'Prince', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nibh cras pulvinar mattis nunc sed blandit. Purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt. Et pharetra pharetra massa massa ultricies. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget nunc scelerisque viverra mauris in aliquam sem. Non quam lacus suspendisse faucibus interdum posuere lorem. Commodo elit at imperdiet dui accumsan sit amet nulla. Nunc sed id semper risus in. Etiam non quam lacus suspendisse faucibus interdum. Lectus quam id leo in vitae. Elit duis tristique sollicitudin nibh. Porttitor massa id neque aliquam.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519776/Tails_of_Joy/vlytsccaaxvw7ttxpxez.jpg', 2, 0);



set identity_insert [UserProfile] off


set identity_insert [Post] on

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (1, 'First night home with our new puppy!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Cras sed felis eget velit aliquet sagittis id consectetur. Feugiat vivamus at augue eget arcu dictum varius duis at. Egestas purus viverra accumsan in nisl nisi. Suspendisse in est ante in nibh mauris. Commodo odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Feugiat sed lectus vestibulum mattis ullamcorper.', 'https://picsum.photos/920/360', '2019-08-01', 1, 0);

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
