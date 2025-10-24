import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";
import { register, login } from "@/app/Controllers/authController.js";

//api/auth
export async function GET(req) {
  return NextResponse.json({ message: "Welcome to next JS Backend" });
}

// register route
export async function POST(req) {
  await connectDB(); // Save data to DB

  try {
    const { searchParams } = new URL(req.url); // searchParams me URL ko liya
    //console.log("Search param", searchParams);

    //http://localhost:3000/api/auth?signup=true
    if (searchParams.get("signup")) { // Ab search se signup ki nikala
      
      return register(req); // fir register ko call kiya ( controller)
    }

    //Login:  http://localhost:3001/api/auth?login=true
    if (searchParams.get("login")) return login(req);
    return NextResponse.json({ message: "Invalid API Endpoint" });  //

  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
