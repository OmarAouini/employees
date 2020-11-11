require("dotenv/config");
const Sequelize = require("sequelize");

/**
 * define the connection to MySQL
 */
async function sqlConnection() {
  try {
    let sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
      }
    );

    await sequelize.authenticate();
    console.log("Connection to MySQL successful!");
  } catch (error) {
    console.log("Connection to MySQL FAILED!", error);
    retryConnection();
  }
}

/**
 * retry to reconnect to database every 5 sec if the first connection fail
 */
function retryConnection() {
  setTimeout(() => {
    sqlConnection()
  }, 5000);
}

module.exports = { sqlConnection };
