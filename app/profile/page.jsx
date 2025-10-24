"use client";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const page = () => {
  // useSate for take data from LocalStorage
  const [user, setUser] = useState(null);
  const router = useRouter();

  // use useeffect to get data from local stogage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div>
       <Navbar/>   {/* Navbar will be show on First. */}
      <div className="container mt-5 d-flex  justify-content-center">
      <div className="card p-4" style={{ width: "28rem", borderRadius: "15px" }}>
        <div className="text-center">
          <FaUser size={60} className="text-primary mb-3" />
          <h2>User Profile</h2>
        </div>

        <hr />

        <div className="px-3">
          <p className="d-flex align-items-center">
            <FaUser className="text-primary me-2" />
            <strong>Name :</strong> {user.name}
          </p>
          <p className="d-flex align-items-center">
            <FaEnvelope className="text-success me-2" />
            <strong>Email :</strong> {user.email}
          </p>
        </div>
         <button
            className="btn btn-danger w-100 mt-3 d-flex justify-content-center align-items-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </button>
      </div>
    </div>
     </div>
    
  );
};

export default page;
