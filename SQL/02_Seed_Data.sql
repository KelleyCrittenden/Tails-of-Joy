USE [TailsOfJoy]; 

 

GO 

 

 

set identity_insert [UserType] on 

 

insert into [UserType] ([ID], [Name]) VALUES (1, 'Admin'), (2, 'User'); 

set identity_insert [UserType] off 

 

 

set identity_insert [UserProfile] on 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (1, 'Ap4P7PjKl2RIgUjvC8YwrVueLY42', 'ADMIN', 'Kelley', 'Crittenden', 'admin@admin.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in. Nunc congue nisi vitae suscipit tellus mauris. Egestas sed tempus urna et. Eget nulla facilisi etiam dignissim diam. Sollicitudin tempor id eu nisl nunc mi ipsum. Dui vivamus arcu felis bibendum ut. Scelerisque in dictum non consectetur a. Elementum facilisis leo vel fringilla est ullamcorper. Velit ut tortor pretium viverra. Sed ullamcorper morbi tincidunt ornare massa eget. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Pellentesque habitant morbi tristique senectus et netus et. Posuere sollicitudin aliquam ultrices sagittis.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604541382/Tails_of_Joy/m0f29ukq4swkva22gme7.jpg', 1, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (2, 'oHltJRrORLOUjUi7tNlkq8JvMQ33', 'JakeReed33', 'Jake', 'Reed', 'jakereed@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604518579/Tails_of_Joy/enios8ora8tprdrmn8ax.jpg', 2, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (3, 'zU2uhkmHigYhg04mT5jE0ri6NKn1', 'GregSmith55', 'Greg', 'Smith', 'gregsmith@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Non quam lacus suspendise faucibus interdum. Quisque egestas diam in arcu cursus euismod quis. Ac tortor dignissim convallis aenean. Praesent elementum facilisis leo vel. Ultricies leo integer malesuada nunc vel risus commodo. Ullamcorper sit amet risus nullam. Sed turpis tincidunt id aliquet risus feugiat in. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604518795/Tails_of_Joy/ujzdwl7iuqoaqxw2nqsp.jpg', 2, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (4, 'CHrN3jzv2IciTz0LZb7ydpqKElU2', 'LizThomas32', 'Liz', 'Thomas', 'lizthomas@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mattis nunc sed blandit libero volutpat sed cras ornare. Nisl suscipit adipiscing bibendum est. Donec et odio pellentesque diam volutpat commodo sed egestas. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Id aliquet risus feugiat in. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ut consequat semper viverra nam libero justo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604518937/Tails_of_Joy/zt9innu0glgba2fbtxzr.jpg', 2, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (5, 'CHrN3jzv2IciTz0LZb7ydpqKElU2', 'LoisHarris45', 'Lois', 'Harris', 'loisharris@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Risus sed vulputate odio ut enim. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae justo eget magna fermentum iaculis eu non diam. Facilisis gravida neque convallis a cras semper auctor neque. Lobortis feugiat vivamus at augue eget arcu dictum varius. Turpis egestas maecenas pharetra convallis posuere. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Neque vitae tempus quam pellentesque nec. Et ultrices neque ornare aenean euismod elementum nisi quis. Mi bibendum neque egestas congue quisque egestas. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Lorem ipsum dolor sit amet consectetur. Libero nunc consequat interdum varius sit amet mattis. Velit laoreet id donec ultrices tincidunt arcu non. Velit ut tortor pretium viverra. Amet venenatis urna cursus eget nunc scelerisque. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519096/Tails_of_Joy/dplz2cep34cmlrujgqoq.jpg', 2, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (6, 'o7HqHroET1QPXGuMA2Vc89bcn1K3', 'LukeJones77', 'Luke', 'Jones', 'lukejones@email.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Accumsan sit amet nulla facilisi. Neque aliquam vestibulum morbi blandit. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Orci eu lobortis elementum nibh. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Donec enim diam vulputate ut pharetra sit amet aliquam. In iaculis nunc sed augue lacus viverra vitae congue. Arcu cursus vitae congue mauris rhoncus aenean. Id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Mi in nulla posuere sollicitudin aliquam. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Est ultricies integer quis auctor elit sed vulputate mi sit.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519199/Tails_of_Joy/uwztkc75vgk6jr6ykrme.png', 2, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (7, '5vVYlvgOvdT9TTIM7uWw3MFRcOs2', 'MargoPrince33', 'Margo', 'Prince', 'margoprince@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nibh cras pulvinar mattis nunc sed blandit. Purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt. Et pharetra pharetra massa massa ultricies. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget nunc scelerisque viverra mauris in aliquam sem. Non quam lacus suspendisse faucibus interdum posuere lorem. Commodo elit at imperdiet dui accumsan sit amet nulla. Nunc sed id semper risus in. Etiam non quam lacus suspendisse faucibus interdum. Lectus quam id leo in vitae. Elit duis tristique sollicitudin nibh. Porttitor massa id neque aliquam.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519314/Tails_of_Joy/egxfzbkl3sloxoy2bdsa.jpg', 2, 0); 

 

insert into UserProfile (Id, FirebaseUserId, Username, FirstName, LastName, Email, Bio, ImageLocation, UserTypeId, IsDeleted) values (8, 'G8RwamjPdcciLUWzouEsASWhs7y2', 'ReneePratt93', 'Renee', 'Pratt','remeepratt@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nibh cras pulvinar mattis nunc sed blandit. Purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt. Et pharetra pharetra massa massa ultricies. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget nunc scelerisque viverra mauris in aliquam sem. Non quam lacus suspendisse faucibus interdum posuere lorem. Commodo elit at imperdiet dui accumsan sit amet nulla. Nunc sed id semper risus in. Etiam non quam lacus suspendisse faucibus interdum. Lectus quam id leo in vitae. Elit duis tristique sollicitudin nibh. Porttitor massa id neque aliquam.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604519776/Tails_of_Joy/vlytsccaaxvw7ttxpxez.jpg', 2, 0); 


 

set identity_insert [UserProfile] off 

 

 

set identity_insert [Post] on 

 

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (1, 'How often to brush teeth', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Cras sed felis eget velit aliquet sagittis id consectetur. Feugiat vivamus at augue eget arcu dictum varius duis at. Egestas purus viverra accumsan in nisl nisi. Suspendisse in est ante in nibh mauris. Commodo odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Feugiat sed lectus vestibulum mattis ullamcorper.', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604527188/Tails_of_Joy/iqinjvqzwvr2b9d6macc.jpg ', '2019-08-01', 2, 0); 

 

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (2, 'Help Leash Training', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Cras sed felis eget velit aliquet sagittis id consectetur. Feugiat vivamus at augue eget arcu dictum varius duis at. Egestas purus viverra accumsan in nisl nisi. Suspendisse in est ante in nibh mauris. Commodo odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Feugiat sed lectus vestibulum mattis ullamcorper. ', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604527249/Tails_of_Joy/ixwcwlfztqrvggd98xcr.jpg ', '2019-08-02', 3, 0); 

 

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (3, 'Learning to manage multiple dogs', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Cras sed felis eget velit aliquet sagittis id consectetur. Feugiat vivamus at augue eget arcu dictum varius duis at. Egestas purus viverra accumsan in nisl nisi. Suspendisse in est ante in nibh mauris. Commodo odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Feugiat sed lectus vestibulum mattis ullamcorper. ', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604527294/Tails_of_Joy/khhyuqz2v5vgfxvq7raj.jpg','2019-08-02', 4, 0); 

 

insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (4, 'First Night Home with New Puppy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Cras sed felis eget velit aliquet sagittis id consectetur. Feugiat vivamus at augue eget arcu dictum varius duis at. Egestas purus viverra accumsan in nisl nisi. Suspendisse in est ante in nibh mauris. Commodo odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Feugiat sed lectus vestibulum mattis ullamcorper. ', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604527442/Tails_of_Joy/iar9ppkreigmjgzpiwdg.jpg ', '2019-08-04', 5, 0); 


insert into Post (Id, Title, Content, ImageLocation, CreateDateTime, UserProfileId, IsDeleted) values (5, 'First Night Home with New Puppy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Cras sed felis eget velit aliquet sagittis id consectetur. Feugiat vivamus at augue eget arcu dictum varius duis at. Egestas purus viverra accumsan in nisl nisi. Suspendisse in est ante in nibh mauris. Commodo odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Feugiat sed lectus vestibulum mattis ullamcorper. ', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604528257/Tails_of_Joy/gaqwehkugc3sgooku4p5.jpg', '2019-08-04', 3, 0); 
 

 

set identity_insert [Post] off 

 

 

set identity_insert [Comment] on 

 

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (1, 1, 2, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-05-19'); 

 

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (2, 1, 3, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-05-11'); 

 

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (3, 1, 4, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-07-01'); 

 

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (4, 2, 2, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-05-19'); 

 

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (5, 3, 3, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-05-11'); 

 

insert into Comment (Id, PostId, UserProfileId, Content, CreateDateTime) values (6, 2, 4, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-07-01'); 

 

set identity_insert [Comment] off 

 

 

set identity_insert [Animal] on 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (1, 0, 'Harley', 'Yorkie', 'Male', 'Young', 'Small', 0, 0, 'Spunky Boy with Lots of Attitude', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536899/Tails_of_Joy/kww3zyil0nhi9bfgluwv.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (2, 1, 'Sammy', 'Whippet', 'Male', 'Adult', 'Large', 0, 0, 'Gentle Giant, sweet boy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536806/Tails_of_Joy/dlbz7tnwlozjxhhtwvgd.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (3, 0, 'Gracie', 'Pug', 'Female', 'Baby', 'Small', 1, 1, 'Independent Baby Girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536740/Tails_of_Joy/drncyml83j4tq28as5cv.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (4, 1, 'Oscar', 'Mutt', 'Male', 'Young', 'Medium', 1, 1, 'High Energy Boy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536667/Tails_of_Joy/al5ppccdivvozviijo5p.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (5, 1, 'Piper', 'Affenpinscher', 'Female', 'Adult', 'Small', 1, 1, 'High Energy Boy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604535513/Tails_of_Joy/g0xbodmiyxhakvbsi8lh.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (6, 1, 'Ryder', 'Beagle', 'Male', 'Adult', 'Medium', 1, 1, 'Sweet boy who needs a loving, calm home', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604535597/Tails_of_Joy/ji0vb2lrq7moo9mvfnn8.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (7, 1, 'Charles', 'Boxer', 'Male', 'Adult', 'Medium', 1, 1, 'High Energy Boy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604535678/Tails_of_Joy/zbxruayqu2tmhxsomjwq.jpg');
 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (8, 1, 'Missy', 'Burmese Mountain', 'Female', 'Adult', 'Medium', 1, 1, 'Beautiful, sweet, calm girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604535780/Tails_of_Joy/i9xhf45mguv2keefjfly.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (9, 1, 'Peaches', 'Corgi', 'Female', 'Young', 'Small', 1, 1, 'Beautiful, sweet, calm girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604535893/Tails_of_Joy/urdll969fiibenyyrwls.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (10, 1, 'Dotty', 'Dalmation', 'Female', 'Adult', 'Large', 0, 1, 'Beautiful, sweet, calm girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604535977/Tails_of_Joy/cj3c8fby5nebhacpeett.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (11, 1, 'Remy LeBeau', 'Giant Schnauzer', 'Male', 'Senior', 'X-Large', 1, 0, 'Beautiful, sweet, calm girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536101/Tails_of_Joy/gmwiib0te0yfhjftclxz.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (12, 1, 'Duchess', 'Goldendoodle', 'Female', 'Young', 'Medium', 1, 0, 'Beautiful, sweet, calm girl', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536181/Tails_of_Joy/k71ocmxxanh3uf0j9umk.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (13, 1, 'Mya', 'Husky', 'Female', 'Senior', 'Large', 1, 0, 'Older girl looking for her forever home', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', ' https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536312/Tails_of_Joy/nbovqwmxva7ibwmffkwb.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (14, 2, 'Allie', 'Great Dane', 'Female', 'Adult', 'X-Large', 1, 0, 'Older girl who needs lots of romo to run', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536253/Tails_of_Joy/jtxe8pujhquklhk7sv1f.jpg'); 

 

insert into Animal (Id, IsAdoptable, Name, Breed, Gender, Age, Size, ChildFriendly, SmallAnimalFriendly, Title, Content, ImageLocation) values (15, 2, 'Frankie', 'Poodle', 'Make', 'Adult', 'X-Large', 1, 0, 'Older girl who needs lots of romo to run', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://res.cloudinary.com/kelleycrittenden/image/upload/v1604536601/Tails_of_Joy/d8tomxfedqmosh2eaocj.jpg'); 

 

set identity_insert [Animal] off 

 

 

set identity_insert [Adoption] on 

 

insert into Adoption (Id, AnimalId, UserProfileId, IsApproved) values (1, 1, 2, 0) 

 

insert into Adoption (Id, AnimalId, UserProfileId, IsApproved) values (2, 3, 3, 0) 

 

set identity_insert [Adoption] off 