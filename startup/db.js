const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(
      "mongodb+srv://danny:password123%21@cluster0.tax92.mongodb.net/employee-directory?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = db;
