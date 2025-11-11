import React, { useState } from "react";
import image from "../assets/loginimage.png";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Loginpage() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!number) {
      setError("Number is required");
      return;
    }

    const payload = {
      mobileNumber: number,
    };

    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/login", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 && response.data.success) {
        alert("✅ OTP sent successfully");
        navigate("/verfy-OTP", { state: { mobileNumber: number } });
      } else {
        setError("Number is not registered");
      }
    } catch (error) {
      console.error("Server side error:", error.response?.data || error.message);
      alert("Server side error, please try again");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 font-[Poppins]">
      <div className="w-[95%] md:w-[80%] lg:w-[70%] flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#f0f9ff] items-center justify-center p-6">
          <img
            src={image}
            alt="Login Illustration"
            className="max-h-[450px] w-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <img src={logo} alt="Logo" className="h-16 mb-6" />

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-8 text-sm text-center">
            Login to continue managing your account
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="number"
                className="font-medium text-gray-700 text-sm mb-1 block"
              >
                Mobile Number
              </label>
              <input
                value={number}
                onChange={(e) => {
                  let value = e.target.value;
                  if (!value.startsWith("+91")) {
                    value = "+91" + value.replace(/^\+91/, "").replace(/\s/g, "");
                  }
                  setNumber(value);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#489fb5]"
                id="number"
                placeholder="+91 9876543210"
              />
              {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#489fb5] hover:bg-[#3a8a9d] transition-all duration-200 text-white py-2 rounded-lg font-medium"
            >
              Generate OTP
            </button>

            <p className="text-sm text-gray-600 text-center mt-2">
              Don’t have an account?{" "}
              <Link to="/singuppage" className="text-[#489fb5] font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
