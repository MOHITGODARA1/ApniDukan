import logo from "../assets/logo.png"
import { useState } from "react";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";
import { useNavigate,Link } from 'react-router-dom';

export function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const nevigate=useNavigate()
  function handelLogin(){
    nevigate('/loginpage');
  }
  return(
    <>
      <div className="w-full h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-16 h-16 sm:w-20 sm:h-20"/>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex w-[40%] justify-center items-center">
          <input type="text" 
          placeholder="Search" 
          className="w-full bg-gray-200 rounded-md p-2"/>
          <button className="bg-[#489fb5] text-white p-2 rounded-md ml-1">Search</button> 
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex w-[40%] justify-center items-center">
          <ul className="flex justify-evenly items-center w-full">
              <a href="/"><li>Home</li></a>
              <a href=""><li>Dashbord</li></a>
              <a href="/Contactus"><li>contact us</li></a>
              <Link to="/Cartpage">
                <HiShoppingCart className="h-6 w-6 cursor-pointer"/>
              </Link>
              <button className="bg-[#489fb5] text-white p-2 rounded-md cursor-pointer hover:scale-110 transition-all duration-300" onClick={handelLogin}>login/signup</button>
            </ul>
        </nav>

        {/* Mobile Menu Button & Icons */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4">
          <Link to="/Cartpage">
            <HiShoppingCart className="h-6 w-6 cursor-pointer"/>
          </Link>
          <button className="bg-[#489fb5] text-white p-2 rounded-md text-sm" onClick={handelLogin}>
            login/signup
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden flex w-full px-4 pb-2">
         <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-200 rounded-md p-2"
          />
          <button className="bg-[#489fb5] text-white p-2 rounded-md ml-1">
            Search
          </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center p-4">
            <a href="" className="py-2"><li>Dashbord</li></a>
            <a href="/Contactus" className="py-2"><li>contact us</li></a>
          </ul>
        </nav>
      )}

      <div className="bg-gray-200 h-[1px]"></div>
    </>
  )
}