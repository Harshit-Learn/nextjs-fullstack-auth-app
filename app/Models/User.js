import mongoose from "mongoose";


// User Schema ( Structure of DB for User)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
},
    {timestamps:true} // save the current time in DB 
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;   //  we can import it with name "User"