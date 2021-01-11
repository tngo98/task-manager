// CRUD create read update delete

import pkg from "mongodb";

const { MongoClient, ObjectID } = pkg;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5ffc7add0ad5da351c7c467f") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch.");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 28 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 28 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    db.collection("tasks").findOne(
      { _id: new ObjectID("5ffc7d067eb77c1850144082") },
      (error, task) => {
        if (error) {
          return console.log("Unable to fetch.");
        }

        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
