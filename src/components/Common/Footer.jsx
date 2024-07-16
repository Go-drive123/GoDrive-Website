import React from 'react';
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../../assets/images/logo.png'; 
function Footer() {
  return (
    <div>
      <footer className="bg-black text-white p-8 mt-4">
        <div className="flex mb-8">
          <img src={logo} alt="Company Logo" className="h-10 px-8" />
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="m-4">
            <h2 className="text-lg mb-4">Company</h2>
            <ul>
              <li className="mb-2">About us</li>
              <li className="mb-2">Our offerings</li>
              <li className="mb-2">Newsroom</li>
              <li className="mb-2">Investors</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">AI</li>
              <li className="mb-2">Gift cards</li>
            </ul>
          </div>
          <div className="m-4">
            <h2 className="text-lg mb-4">Products</h2>
            <ul>
              <li className="mb-2">Footer</li>
              <li className="mb-2">Drive</li>
              <li className="mb-2">Deliver</li>
              <li className="mb-2">Eat</li>
              <li className="mb-2">Uber for Business</li>
              <li className="mb-2">Uber Freight</li>
            </ul>
          </div>
          <div className="m-4">
            <h2 className="text-lg mb-4">Global citizenship</h2>
            <ul>
              <li className="mb-2">Safety</li>
              <li className="mb-2">Diversity and Inclusion</li>
              <li className="mb-2">Sustainability</li>
            </ul>
          </div>
          <div className="m-4">
            <h2 className="text-lg mb-4">Travel</h2>
            <ul>
              <li className="mb-2">Reserve</li>
              <li className="mb-2">Airports</li>
              <li className="mb-2">Cities</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-12 pl-4">
            <span><FaFacebook /></span> 
            <span><FaXTwitter /></span> 
            <span><IoLogoYoutube /></span>
            <span><SiLinkedin /></span>
            <span><BsInstagram /></span>
          </div>
          <div className="flex space-x-4">
            <span>English</span>
            <span>Chennai</span>
          </div>
        </div>

        <div className="text-center mt-8"> 
          <p><span>© 2024&nbsp;</span>Go Drive Technologies Inc.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
