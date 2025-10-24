import mongoose from "mongoose";

// connect MongoDB with Mongoose 
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        dbName: "Nextjs_Auth_App",
      }
    );
    console.log("MongoDB connected Successfully!!")
  } catch (error) {
    console.log(error.message)
  }
};

export default connectDB;