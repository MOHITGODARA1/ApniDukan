import React, { useState } from "react";
import image from "../../assets/loginimage.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
    ...prev,
    [id]: id === "number"
      ? value.startsWith("+91") 
        ? value // keep if already added
        : "+91" + value.replace(/^\+91/, "").replace(/\s/g, "") // ensure no duplicate +91
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

  const handleSubmit =async (e) => {
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
      const response=await axios
        .post("http://localhost:4000/api/v1/user/register", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      if(response.data.success && response.status===201){
        alert("Account is created sucessfully");
        navigate("/")
      }else{
        alert("all field are required")
      }
    } catch (error) {
      console.error("Server side error:", error.response?.data || error.message);
      alert("Server side error, please try again");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        {/* logo section for small screens */}
        <div className="h-20 w-full flex items-center justify-center md:hidden">
          <img src={logo} alt="logo" className="h-full md:ml-6 ml-3" />
        </div>

        <div className="w-[90%] h-screen flex justify-center items-start md:items-center">
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
              onSubmit={handleSubmit}
              className="w-full h-[90%] flex flex-col justify-center mb-4 md:mt-16 mt-6"
            >
              {/* name */}
              <div>
                <label htmlFor="name" className="font-semibold text-lg">
                  Name
                </label>
                <br />
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none"
                  placeholder="Enter name"
                />
                {errors.name && (
                  <p className="text-[15px] text-red-600">{errors.name}</p>
                )}
              </div>

              {/* number */}
              <div className="mt-4">
                <label htmlFor="number" className="font-semibold text-lg">
                  Mobile Number
                </label>
                <br />
                <input
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none"
                  placeholder="Enter Number"
                />
                {errors.number && (
                  <p className="text-[15px] text-red-600">{errors.number}</p>
                )}
              </div>

              {/* email */}
              <div className="mt-4">
                <label htmlFor="email" className="font-semibold text-lg">
                  Email (Optional)
                </label>
                <br />
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none"
                  placeholder="Enter Email"
                />
              </div>

              {/* role selection */}
              <div className="mt-4 h-10 w-full md:w-[90%] flex rounded-lg">
                <div
                  className={`h-full w-1/2 flex justify-center items-center cursor-pointer border-r-2 border-black rounded-l-lg hover:bg-[#489fb5] transition-all duration-300 ${
                    retailer ? "bg-[#489fb5] text-white" : "bg-[#b0d3e1]"
                  }`}
                  onClick={() => {
                    setretailer(true);
                    setshopkeeper(false);
                  }}
                >
                  <h3 className="text-sm md:text-lg">Retail/Individual</h3>
                </div>
                <div
                  className={`h-full w-1/2 flex justify-center items-center cursor-pointer rounded-r-lg hover:bg-[#489fb5] transition-all duration-300 ${
                    shopkeeper ? "bg-[#489fb5] text-white" : "bg-[#b0d3e1]"
                  }`}
                  onClick={() => {
                    setshopkeeper(true);
                    setretailer(false);
                  }}
                >
                  <h3 className="text-sm md:text-lg">Shopkeeper</h3>
                </div>
              </div>

              {/* retailer form */}
              {retailer && (
                <div className="w-full flex flex-col justify-center">
                  <div className="mt-4">
                    <label htmlFor="adress" className="font-semibold text-lg">
                      Address
                    </label>
                    <br />
                    <input
                      id="adress"
                      value={formData.adress}
                      onChange={handleChange}
                      className="px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none"
                      placeholder="Enter Street name"
                    />
                    {errors.adress && (
                      <p className="text-[10px] text-red-600">{errors.adress}</p>
                    )}
                  </div>

                  {/* credit limit */}
                  <div className="mt-4">
                    <label className="font-semibold text-lg">
                      Need Credit Limit
                    </label>
                    <div className="flex items-center gap-4 mt-2">
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
                      <p className="text-[10px] text-red-600">{errors.limit}</p>
                    )}
                  </div>
                </div>
              )}

              {/* shopkeeper form */}
              {shopkeeper && (
                <div className="w-full flex flex-col justify-center">
                  <div className="mt-4">
                    <label htmlFor="adress" className="font-semibold text-lg">
                      Address / Shop name
                    </label>
                    <br />
                    <input
                      id="adress"
                      value={formData.adress}
                      onChange={handleChange}
                      className="px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none"
                      placeholder="Enter Street name"
                    />
                    {errors.adress && (
                      <p className="text-[10px] text-red-600">{errors.adress}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <label htmlFor="gstnumber" className="font-semibold text-lg">
                      GST Number (Optional)
                    </label>
                    <br />
                    <input
                      id="gstnumber"
                      value={formData.gstnumber}
                      onChange={handleChange}
                      className="px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none"
                      placeholder="Enter GST number"
                    />
                  </div>

                  {/* credit limit */}
                  <div className="mt-4">
                    <label className="font-semibold text-lg">
                      Need Credit Limit
                    </label>
                    <div className="flex items-center gap-4 mt-2">
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
                      <p className="text-[10px] text-red-600">{errors.limit}</p>
                    )}
                  </div>
                </div>
              )}

              {/* submit */}
              <div>
                <button
                  type="submit"
                  className="w-full md:w-[90%] bg-[#489fb5] h-9 text-white mt-6 rounded-lg"
                >
                  Login
                </button>
              </div>
              <div>
                <Link to="/loginpage">
                  <p className="text-sm text-center mt-2">Have an account?</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
