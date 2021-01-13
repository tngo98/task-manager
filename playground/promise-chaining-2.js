import "../src/db/mongoose.js";
import { Task } from "../src/models/task.js";

Task.findByIdAndRemove("5ffdb7cb47ef49318c16d042")
  .then((task) => {
    console.log(task);

    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
