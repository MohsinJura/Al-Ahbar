import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="flex flex-col md:flex-row justify-between max-w-[70%] mx-auto">
        {/* Logo & Description */}
        <div className="flex flex-col w-1/4 gap-4 border-r-2 border-gray-500 pr-6">
          <img src="/logo.png" alt="Al-Al-Ahbar logo" className="w-28" />
          <p className="text-[14px] font-semibold">
            We are a Professional, well-skilled, expert team/company & the cheapest in all over UAE. We are the best for printer services.
          </p>
          <div className="flex space-x-4 text-xl pt-4">
            <FaFacebook size={35} className="bg-indigo-600 text-white p-2 rounded-full cursor-pointer" />
            <FaInstagram size={35} className="bg-pink-500 text-white p-2 rounded-full cursor-pointer" />
            <FaLinkedin size={35} className="bg-blue-800 text-white p-2 rounded-full cursor-pointer" />
            <FaTwitter size={35} className="bg-blue-400 text-white p-2 rounded-full cursor-pointer" />
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col w-1/4 gap-4 border-r-2 border-gray-500 px-6">
          <h4 className="text-dpink font-bold text-[15px]">QUICK LINKS</h4>
          <ul className="flex flex-col justify-between gap-2 pt-2">
            <Link className="foot-link" to='/'>Home</Link>
            <Link className="foot-link" to='/'>Printer Repair</Link>
            <Link className="foot-link" to='/'>Printer Rental</Link>
            <Link className="foot-link" to='/'>Copy Center</Link>
            <Link className="foot-link" to='/'>Blog</Link>
            <Link className="foot-link" to='/'>About Us</Link>
            <Link className="foot-link" to='/'>Contact</Link>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="px-6">
          <h4 className="text-dpink font-bold text-[15px] mb-5">CONTACT INFO</h4>
          <p className="flex items-center text-sm font-serif"><MdLocationOn size={29} className="text-darkpink mr-2" /> Al-Ahbar Office Equip Trd, 25A, Al Nasserya Street, Al Nasserya, Al Sharq, Sharjah, Dubai</p>
          <p className="flex items-center text-gray-400 mt-3 font-mono"><MdPhone size={20} className="text-darkpink mr-2" /> 055-3466898</p>
          <p className="flex items-center text-gray-400 mt-3"><MdEmail size={20} className="text-darkpink mr-2" /> info@al-ahbar.com</p>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="flex flex-col lg:flex-row justify-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-300">© Copyright 2024 Al-Al-Ahbar. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
