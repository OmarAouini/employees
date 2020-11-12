const mongoose = require("mongoose");
require("dotenv/config");

/**
 * define the connection to MongoDB
 */
async function mongoConnection() {
  try {
    await mongoose.connect(process.env.DB_HOST, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to MongoDB successful!");
  } catch (error) {
    console.log("Connection to MongoDB FAILED!", error);
    retryConnection();
  }
}

/**
 * retry to reconnect to database every 5 sec if the first connection fail
 */
async function retryConnection() {
  await setTimeout(() => {
    mongoConnection();
  }, 5000);
}

module.exports = { mongoConnection };
