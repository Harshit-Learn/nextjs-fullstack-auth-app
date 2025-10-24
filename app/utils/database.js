import mongoose from "mongoose";

// connect MongoDB with Mongoose 
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harshitbaranwal609_db_user:gy2XzQay2FNYmMwr@cluster0.ksojhmj.mongodb.net/",
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