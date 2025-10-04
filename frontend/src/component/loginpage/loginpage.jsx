import React, { useState } from 'react';
import image from '../../assets/loginimage.png';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios"
export function Loginpage() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const handleSubmit =async (e) => {
    e.preventDefault();


    if (!number) {
      setError("Number is required");
      return;
    }
    const payload={
      mobileNumber:number
    }
    setError("");
    console.log("Mobile Number:", number);
    try {
      const response=await axios.post("http://localhost:4000/api/v1/user/login",payload,{
        headers:{
          "Content-Type":"application/json"
        },
      });
      if(response.status===200 && response.data.success){
        alert("✅ OTP sent successfully");
        navigate("/verfy-OTP",{ state: { mobileNumber: number } })
      }else{
        setError("Number is not register")
      }
    } catch (error) {
      console.error("Server side error:", error.response?.data || error.message);
      alert("Server side error, please try again");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        {/* mobile logo section */}
        <div className="h-20 w-full flex items-center justify-center md:hidden">
          <img src={logo} alt="logo" className="h-full md:ml-6 ml-3" />
        </div>

        <div className="w-[90%] md:h-screen flex justify-center items-center">
          {/* left image section */}
          <div className="h-[90%] w-1/2 md:flex hidden">
            <div
              className="h-full w-full bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>

          {/* right form section */}
          <div className="md:w-1/2 w-full flex justify-center items-start">
            <form
              className="w-full h-[90%] flex flex-col justify-center mb-4 md:mt-16 mt-6"
            >
              <div>
                <label htmlFor="number" className="font-semibold text-xl">
                  Mobile Number
                </label>
                <br />
                <input
                  value={number}
                  onChange={(e) =>{
                    let value = e.target.value;
                    // Automatically add +91 if not already present
                    if (!value.startsWith("+91")) {
                      value = "+91" + value.replace(/^\+91/, "").replace(/\s/g, "");
                    }
                    setNumber(value);
                  }}
                  className="px-2 border border-black md:w-[90%] w-full mt-1 h-10 md:h-8 rounded-lg outline-none"
                  id="number"
                  placeholder="Enter Number"
                />
                {error && (
                  <p className="text-[10px] text-red-600">{error}</p>
                )}
              </div>

              <div>
                  <button
                  onClick={handleSubmit}
                    type="submit"
                    className="md:w-[90%] w-full bg-[#489fb5] h-10 md:h-8 text-white mt-6 rounded-lg"
                  >
                    Generate OTP
                  </button>
              </div>

              <div>
                <Link to="/singuppage">
                  <p className="text-sm text-center mt-2">
                    Don’t have an account?
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
