import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="GoDrive Logo" className="h-10 w-auto mr-4" />
          <div className="hidden lg:block text-white">
            <p className="font-bold">+91-9876543210</p>
            <p className="text-sm">inmakesgoldentheater@gmail.com</p>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link to="/" className="text-white font-semibold hover:underline">Home</Link>
          <Link to="/about" className="text-white font-semibold hover:underline">About</Link>
          <Link to="/contact" className="text-white font-semibold hover:underline">Contact</Link>
          <Link to="/help" className="text-white font-semibold hover:underline">Help</Link>
          <div className="relative">
            <button onClick={toggleAboutDropdown} className="text-white flex items-center">
              <span>More</span>
              <IoIosArrowDown className="ml-2" />
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <Link to="/our-offerings" className="block px-4 py-2 text-black hover:bg-gray-200">Our Offerings</Link>
                <Link to="/how-godrive-works" className="block px-4 py-2 text-black hover:bg-gray-200">How GoDrive Works</Link>
                <Link to="/impact" className="block px-4 py-2 text-black hover:bg-gray-200">Impact</Link>
                <Link to="/explore" className="block px-4 py-2 text-black hover:bg-gray-200">Explore</Link>
                <Link to="/newsroom" className="block px-4 py-2 text-black hover:bg-gray-200">Newsroom</Link>
                <Link to="/blog" className="block px-4 py-2 text-black hover:bg-gray-200">Blog</Link>
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link to="/signin">
            <button className="text-white bg-transparent border border-white hover:bg-gray-800 rounded px-4 py-2 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-black bg-white hover:bg-gray-800 hover:text-white rounded px-4 py-2 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black text-white p-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
          <Link to="/help" className="block py-2">Help</Link>
          <div className="relative">
            <button onClick={toggleAboutDropdown} className="w-full text-left py-2">
              <span>More</span>
              <IoIosArrowDown className="ml-2 inline" />
            </button>
            {isAboutDropdownOpen && (
              <div className="bg-white text-black border rounded-lg shadow-lg mt-2">
                <Link to="/our-offerings" className="block px-4 py-2 hover:bg-gray-200">Our Offerings</Link>
                <Link to="/how-godrive-works" className="block px-4 py-2 hover:bg-gray-200">How GoDrive Works</Link>
                <Link to="/impact" className="block px-4 py-2 hover:bg-gray-200">Impact</Link>
                <Link to="/explore" className="block px-4 py-2 hover:bg-gray-200">Explore</Link>
                <Link to="/newsroom" className="block px-4 py-2 hover:bg-gray-200">Newsroom</Link>
                <Link to="/blog" className="block px-4 py-2 hover:bg-gray-200">Blog</Link>
              </div>
            )}
          </div>
          <Link to="/signin" className="block py-2">
            <button className="text-white bg-transparent border border-white hover:bg-gray-800 rounded px-4 py-2 transition duration-300 w-full">
              Login
            </button>
          </Link>
          <Link to="/signup" className="block py-2">
            <button className="text-black bg-white hover:bg-gray-800 hover:text-white rounded px-4 py-2 transition duration-300 w-full">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
