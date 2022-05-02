const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb://127.0.0.1:27017/auth-db";
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    console.log("Connect fail")
    throw e;
  }
};

module.exports = InitiateMongoServer;