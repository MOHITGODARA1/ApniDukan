import React, { useState } from "react";
import image from "../assets/loginimage.png";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Verifyotp() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber;

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError("OTP is required");
      return;
    }

    const payload = {
      otp,
      mobileNumber,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/Verify-User",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.user.isVerified && response.data.success) {
        localStorage.setItem("isVerified", "true");
        alert("✅ Login successful! Redirecting...");
        navigate("/");
      } else {
        setError("Invalid OTP");
      }
    } catch (error) {
      console.error("Server error:", error.response?.data || error.message);
      setError("Server side error, please try again");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e0f7fa] to-[#80deea]">
      <div className="w-[95%] md:w-[80%] lg:w-[70%] flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#f0f9ff] items-center justify-center p-6">
          <img
            src={image}
            alt="OTP Illustration"
            className="max-h-[450px] w-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <img src={logo} alt="Logo" className="h-16 mb-6" />

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Verify OTP 🔐
          </h2>
          <p className="text-gray-500 mb-8 text-sm text-center">
            Enter the 6-digit OTP sent to your mobile number
          </p>

          <form
            onSubmit={handleVerify}
            className="w-full max-w-sm flex flex-col gap-4 items-center"
          >
            <input
              id="otp"
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                setOtp(val);
              }}
              className="text-center text-2xl tracking-[10px] px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#489fb5]"
              placeholder="••••••"
            />
            {error && (
              <p className="text-xs text-red-600 -mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="bg-[#489fb5] hover:bg-[#3a8a9d] transition-all duration-200 text-white py-2 rounded-lg font-medium w-full"
            >
              Verify OTP
            </button>

            <p className="text-sm text-gray-600 text-center mt-2">
              Didn’t receive the OTP?{" "}
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="text-[#489fb5] font-medium hover:underline"
              >
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verifyotp;
