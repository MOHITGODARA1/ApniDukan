import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

export function Navbar() {
  const [isVerified, setVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verified = localStorage.getItem("isVerified") === "true";
    setVerified(verified);
  }, []);

  function handleLogin() {
    navigate("/loginpage");
  }

  function handleLogout() {
    localStorage.removeItem("isVerified");
    setVerified(false);
    navigate("/");
  }

  return (
    <div className="w-full h-20 flex items-center justify-between px-8 bg-white border-b border-[#dce3eb] shadow-sm">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-22 h-22" />
      </div>

      {/* Search Bar */}
      <div className="flex w-[35%] items-center">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full bg-gray-200 border border-gray-300 rounded-lg p-2 outline-none focus:border-[#489fb5]"
        />
        <button className="bg-[#489fb5] text-white px-4 py-2 rounded-lg ml-2 hover:bg-[#3f8ea1] transition">
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-[#1e293b] text-[16px] font-medium">
        <Link to="/" className="hover:text-[#489fb5] transition text-lg font-normal">Dashboard</Link>
        <Link to="/Allproduct" className="hover:text-[#489fb5] transition text-lg font-normal">Products</Link>
        <Link to="/orders" className="hover:text-[#489fb5] transition text-lg font-normal">Orders</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Cart Icon */}
        <Link to="/Cartpage">
          <HiShoppingCart className="h-7 w-7 cursor-pointer hover:text-[#489fb5] transition" />
        </Link>

        {/* Login / Logout Button */}
        {!isVerified ? (
          <button
            className="bg-[#489fb5] text-white px-4 py-2 rounded-lg hover:scale-105 transition"
            onClick={handleLogin}
          >
            Login / Signup
          </button>
        ) : (
          <button
            className="bg-[#489fb5] text-white px-4 py-2 rounded-lg hover:scale-105 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </div>
  );
}

export default Navbar;
