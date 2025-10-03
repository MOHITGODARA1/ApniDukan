import React, { useState } from 'react';
import image from '../../assets/loginimage.png';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
function Verifyotp(){
  const [otp,setotp]=useState("");
  const [error,seterror]=useState("");
  const handelVerify=(e)=>{
    e.preventDefault();
    if(!otp){
      seterror("OTP is Required");
      return;
    }
    seterror("");

  }
  return(
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
                <div className="flex flex-col items-center">
                  <label htmlFor="otp" className="font-semibold text-xl mb-2">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    maxLength={6} // limits OTP to 6 digits
                    value={otp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/, ""); // allow only numbers
                      setotp(val);
                    }}
                    className="text-center tracking-widest text-xl md:text-2xl px-4 py-2 border border-black rounded-lg md:w-[90%] focus:outline-none focus:ring-2 focus:ring-[#489fb5]"
                    placeholder="------"
                  />
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </div>
    
                  <div>
                      <button
                        onClick={handelVerify}
                        className="md:w-[90%] w-full bg-[#489fb5] h-10 md:h-8 text-white mt-6 rounded-lg"
                      >
                        Verify OTP
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  )
}

export default Verifyotp