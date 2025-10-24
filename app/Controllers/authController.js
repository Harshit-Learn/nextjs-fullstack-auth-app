import { NextResponse } from "next/server";
import User from "../Models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

//User Register Method
export const register = async (req) => {
  const { name, email, password } = await req.json(); // body se data lana from  req.json() .

  try {
    // check existing user
    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        message: "User already exist",
        Success: "flase",
      });
    }

    // hash the password from Bcrypt
    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashPassword }); // add data in User Schema
    return NextResponse.json({
      message: "User Register Successfully",
      user,
      Success: "true",
    });
  } catch (error) {
    console.log(error.message);
  }

  return NextResponse.json({
    message: "Geting data from body",
    data: req.json(),
  });
};

// User Login
export const login = async (req) => {
  const { email, password } = await req.json();

  try {
    // Check user by email, user exist or not
    let user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ message: "User not exist", success: false });

    //Decrypt password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return NextResponse.json({
        message: "Invalid Credentials",
        success: false,
      });

      // Use JWT Webtoken
      const token = jwt.sign({id:user._id}, "!@#" , {
      expiresIn:"1d"
      })

    return NextResponse.json({message: `Welcome back ${user.name}`,user, token});
  } catch (error) {
    console.log("Error is :", message.error);
  }
};
