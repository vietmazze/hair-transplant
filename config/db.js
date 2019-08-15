const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongooseURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      dbName: "Contact-Keeper",
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Atlast database connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
