import React, { useState } from "react";
import image from "../assets/loginimage.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SingUP() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    adress: "",
    gstnumber: "",
    limit: "",
  });
  const [errors, setErrors] = useState({});
  const [retailer, setretailer] = useState(false);
  const [shopkeeper, setshopkeeper] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]:
        id === "number"
          ? value.startsWith("+91")
            ? value
            : "+91" + value.replace(/^\+91/, "").replace(/\s/g, "")
          : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.number) newErrors.number = "Number is required";
    if (retailer || shopkeeper) {
      if (!formData.adress) newErrors.adress = "Address is required";
      if (!formData.limit) newErrors.limit = "This field is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const role = shopkeeper ? "shopkeeper" : "Retailer";

    const payload = {
      name: formData.name,
      email: formData.email,
      mobileNumber: formData.number,
      BuyerType: role,
      Address: formData.adress,
      gstNumber: formData.gstnumber,
      creditLimit: formData.limit === "yes" ? 1 : 0,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success && response.status === 201) {
        alert("🎉 Account created successfully! Redirecting to main page...");
        navigate("/");
      } else {
        alert("⚠️ All fields are required");
      }
    } catch (error) {
      console.error("Server side error:", error.response?.data || error.message);
      alert("❌ Server error, please try again");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-[#d9f3f8] via-[#b5e4ef] to-[#8fd3e9] font-[Poppins] px-2">
        <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Left image section */}
          <div className="hidden md:flex w-1/2 bg-[#e3f6f8] justify-center items-center">
            <img
              src={image}
              alt="signup visual"
              className="w-[80%] h-auto drop-shadow-xl"
            />
          </div>

          {/* Right form section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12">
            {/* Logo for mobile */}
            <div className="h-20 w-full flex items-center justify-center md:hidden mb-4">
              <img src={logo} alt="logo" className="h-16" />
            </div>

            <h2 className="text-3xl font-semibold text-[#489fb5] mb-2">
              Create an Account
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Join our community and start exploring today!
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col justify-center items-center"
            >
              {/* Name */}
              <div className="w-full mb-4">
                <label htmlFor="name" className="font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489fb5] outline-none"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Number */}
              <div className="w-full mb-4">
                <label htmlFor="number" className="font-semibold text-gray-700">
                  Mobile Number
                </label>
                <input
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489fb5] outline-none"
                />
                {errors.number && (
                  <p className="text-sm text-red-600 mt-1">{errors.number}</p>
                )}
              </div>

              {/* Email */}
              <div className="w-full mb-4">
                <label htmlFor="email" className="font-semibold text-gray-700">
                  Email (Optional)
                </label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489fb5] outline-none"
                />
              </div>

              {/* Role Selection */}
              <div className="w-full flex rounded-lg overflow-hidden border border-gray-300 mb-4">
                <div
                  className={`flex-1 text-center py-2 cursor-pointer transition-all ${
                    retailer
                      ? "bg-[#489fb5] text-white"
                      : "bg-gray-100 hover:bg-[#d4f0f5]"
                  }`}
                  onClick={() => {
                    setretailer(true);
                    setshopkeeper(false);
                  }}
                >
                  Retail / Individual
                </div>
                <div
                  className={`flex-1 text-center py-2 cursor-pointer transition-all ${
                    shopkeeper
                      ? "bg-[#489fb5] text-white"
                      : "bg-gray-100 hover:bg-[#d4f0f5]"
                  }`}
                  onClick={() => {
                    setshopkeeper(true);
                    setretailer(false);
                  }}
                >
                  Shopkeeper
                </div>
              </div>

              {/* Retailer Fields */}
              {retailer && (
                <div className="w-full">
                  <div className="mb-4">
                    <label htmlFor="adress" className="font-semibold text-gray-700">
                      Address
                    </label>
                    <input
                      id="adress"
                      value={formData.adress}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489fb5] outline-none"
                    />
                    {errors.adress && (
                      <p className="text-sm text-red-600 mt-1">{errors.adress}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold text-gray-700">
                      Need Credit Limit
                    </label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="limit"
                          value="yes"
                          checked={formData.limit === "yes"}
                          onChange={(e) =>
                            setFormData({ ...formData, limit: e.target.value })
                          }
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="limit"
                          value="no"
                          checked={formData.limit === "no"}
                          onChange={(e) =>
                            setFormData({ ...formData, limit: e.target.value })
                          }
                        />
                        No
                      </label>
                    </div>
                    {errors.limit && (
                      <p className="text-sm text-red-600 mt-1">{errors.limit}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Shopkeeper Fields */}
              {shopkeeper && (
                <div className="w-full">
                  <div className="mb-4">
                    <label htmlFor="adress" className="font-semibold text-gray-700">
                      Address / Shop Name
                    </label>
                    <input
                      id="adress"
                      value={formData.adress}
                      onChange={handleChange}
                      placeholder="Enter shop address"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489fb5] outline-none"
                    />
                    {errors.adress && (
                      <p className="text-sm text-red-600 mt-1">{errors.adress}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="gstnumber" className="font-semibold text-gray-700">
                      GST Number (Optional)
                    </label>
                    <input
                      id="gstnumber"
                      value={formData.gstnumber}
                      onChange={handleChange}
                      placeholder="Enter GST number"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489fb5] outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold text-gray-700">
                      Need Credit Limit
                    </label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="limit"
                          value="yes"
                          checked={formData.limit === "yes"}
                          onChange={(e) =>
                            setFormData({ ...formData, limit: e.target.value })
                          }
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="limit"
                          value="no"
                          checked={formData.limit === "no"}
                          onChange={(e) =>
                            setFormData({ ...formData, limit: e.target.value })
                          }
                        />
                        No
                      </label>
                    </div>
                    {errors.limit && (
                      <p className="text-sm text-red-600 mt-1">{errors.limit}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#489fb5] text-white font-semibold py-2 rounded-lg hover:bg-[#3a8fa1] transition-all mt-4"
              >
                Sign Up
              </button>

              <p className="text-sm text-gray-600 mt-3 text-center">
                Already have an account?{" "}
                <Link
                  to="/loginpage"
                  className="text-[#489fb5] hover:underline font-medium"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
