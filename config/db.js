const mongoose = require("mongoose")


const connectDb = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to database");
  } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1); // Exit the process with failure
  }
};
module.exports = connectDb;