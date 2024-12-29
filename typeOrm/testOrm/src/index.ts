import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { UserPhoto } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Harry";
    // user.lastName = "Potter";
    // user.age = 12;
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    // console.log(
    //   "Here you can setup and run express / fastify / any other framework."
    // );

    // const photo = new UserPhoto();
    // photo.name = "Me and Bears";
    // photo.description = "I am near polar bears";
    // photo.filename = "photo-with-bears.jpg";
    // photo.views = 1;
    // photo.isPublished = true;
    const photoRepository = AppDataSource.getRepository(UserPhoto)
    //console.log("Photo has been saved")
    // console.log("Photo has been saved. Photo id is", photo.id);
    
    const savedPhotos = await photoRepository.find()
    console.log("All photos from the db: ", savedPhotos)
  })
  .catch((error) => console.log(error));
