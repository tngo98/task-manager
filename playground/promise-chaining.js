import "../src/db/mongoose.js";
import { User } from "../src/models/user.js";

// 5ffdb45da4840703c83e86c6

User.findByIdAndUpdate("5ffdb6c350a80a175854da45", { age: 1 })
  .then((user) => {
    console.log(user);

    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
