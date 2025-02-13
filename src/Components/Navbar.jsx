import React, { useState } from 'react';
import { FaBars, FaEnvelope, FaTimes } from 'react-icons/fa';
import { FaPhone, FaSuperpowers } from 'react-icons/fa6';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full">
        {/* Topbar */}
        <div className=" bg-slate-100 md:flex justify-between items-center py-2 px-32"> 
          <div className='block'>
            <Link to='/'>
              <img src='/logo.png' className='h-14 w-auto' />
            </Link>
          </div>
          <div className="hidden md:flex flex-row justify-between items-center gap-4 px-20 ">
            <div className="flex flex-row gap-4">
              <div className="flex justify-between gap-2 pr-4 border-r border-gray-300">
                <div className='flex pt-1.5'>
                  <FaPhone className='text-gray-600' />
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <p className='text-black font-bold'>Call us:</p>
                  </div>
                  <div className='text-xs'>
                    <span className='text-gray-500 font-bold'>DUBIAI </span>
                    <span className='text-gray-400'> 0553466899</span>
                    <span className='text-gray-600'> - </span>
                    <span className='text-gray-500 font-bold'> SHARJAN </span>
                    <span className='text-gray-400'> 065640057</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2 pr-4 border-r border-gray-300">
                <div className='flex pt-1.5'>
                  <FaEnvelope className='text-gray-600 ' />
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <p className='text-black font-bold'>Email:</p>
                  </div>
                  <div className='text-xs'>
                    <span className='text-gray-500 font-bold'>INFO@Al-Ahbar.COM </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2 pr-4 border-r border-gray-300">
                <div className='flex pt-1.5'>
                  <FaSuperpowers className='text-gray-600 ' />
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <p className='text-black font-bold'>Live Chat</p>
                  </div>
                  <div className='text-xs'>
                    <span className='text-gray-500 font-bold'>AVAILABLE 24X7 HRS </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <button className="btn-md">
                Get A Quote
              </button>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="hidden bg-gray-900 h-18 md:flex justify-between items-center py-0.5 px-32">
          <div className="flex justify-between items-center gap-12 mx-auto">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/printer-repair" className="nav-link">PRINTER REPAIR</Link>
            <Link to="/printer-rental" className="nav-link">PRINTER RENTAL</Link>
            <Link to="/copy-center" className="nav-link">COPY CENTER</Link>
            <Link to="/products" className="nav-link">PRODUCTS</Link>
            <Link to="/services" className="nav-link">SERVICES</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </div>
        </div>
        {/* nacBar button */}
        <div className="md:hidden flex items-center justify-end px-20">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none hover:text-blue-400 transition duration-300"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="flex flex-col space-y-4 px-4 py-2">
              <a href="/" className="hover:text-blue-400 transition duration-300">HOME</a>
              <a href="/printer-repair" className="hover:text-blue-400 transition duration-300">PRINTER REPAIR</a>
              <a href="/printer-rental" className="hover:text-blue-400 transition duration-300">PRINTER RENTAL</a>
              <a href="/copy-center" className="hover:text-blue-400 transition duration-300">COPY CENTER</a>
              <a href="/products" className="hover:text-blue-400 transition duration-300">PRODUCTS</a>
              <a href="/services" className="hover:text-blue-400 transition duration-300">SERVICES</a>
              <a href="/contact" className="hover:text-blue-400 transition duration-300">CONTACT</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;