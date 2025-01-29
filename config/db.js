const mongoose = require("mongoose")


const connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/ch15"); // Connect to MongoDB
    console.log("Connected to database"); // Log successful connection
  };
  module.exports = connectDb();