"use client"; // to use React direct in Next
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaSign,
} from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";





const AuthForm = () => {
    const router = useRouter();
  //useState-1
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // useState-2
  const [isLogin, setisLogin] = useState(false);

  //useState-2
  const [message, setMessage] = useState("");

  // useState-3 Loader
  const [loading, setLoading] = useState(false);

  // useEffect:Local storage me user he to redirect ho jaye profile pr by using GET ( useEffect come for this)
  useEffect(() => {
    if(localStorage.getItem("token")){
        router.push("/profile")
    }
  }, [])
  

  //handleChange for user Input
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    //console.log(formData)
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    //   http://localhost:3001/api/auth?login=true
    //API Call using axios
    const url = isLogin ? "api/auth?login=true" : "api/auth?signup=true";
    try {
      const { data } = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json", // tell data is in json format
        },
      });

      alert(data.message);
      console.log("data from backend = ", data);
      setMessage(data.message);

      //Add data in localStorage
       if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/profile"); // redirect to profile page using this router
      }

    } catch (error) {
      setMessage("Somthing went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4"
        style={{ width: "28rem", borderRadius: "12px" }}
      >
        <div className="text-center">
          {/* Conditional Rendering */}
          {isLogin ? (
            <FaSignInAlt size={50} className="text-primary mb-3" />
          ) : (
            <FaUserPlus size={50} className="text-success mb-3" />
          )}
          <h2 className="fw-bold">{isLogin ? "Login" : "SignUp"}</h2>
        </div>

        <hr />
        <form onSubmit={handleSubmit}>
          {/* user input */}
          {!isLogin && (
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaUser className="text-primary" />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          )}

          {/* email input */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <FaEnvelope className="text-success" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* password input */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <FaLock className="text-danger" />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button
              type="submit"
              className={`btn w-100 ${isLogin ? "btn-primary" : "btn-success"}`}
              disabled={loading}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Signup"}
            </button>
        </form>

        {/* User login paragraph */}
        <p
          className="text-center mt-3 text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => setisLogin(!isLogin)}
        >
          {isLogin ? "Create an account" : "Alreday have an account? Login"}
        </p>

        {/* message state */}
        {message && <p className="text-danger text-center mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default AuthForm;
