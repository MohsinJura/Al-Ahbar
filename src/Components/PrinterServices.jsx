import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PrinterServices = () => {
  return (
    <div className="px-6 py-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        {/* Printer Rental Services */}
        <div className="w-5/12 space-y-6">
          <h2 className="title-bold">Printer Rental Services</h2>
          <p className="txt-normal">
            At Al-Ahbar , we offer a comprehensive range of printer rental services in Dubai. Whether you need a Samsung, Xerox, Panasonic, <strong>Canon</strong>, Epson, Brother, or any other type of printer, you can easily find and rent it from us. Our commitment to providing the lowest prices in the market sets us apart from the competition. We offer delivery services throughout the UAE/Dubai region.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">Extensive Printer Selection</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">Great Prices</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">Dependable Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">Trusted and Highly Recommended</span>
            </li>
          </ul>
          <button className="btn-md mt-8">Printer Rental</button>
        </div>

        {/* Printer Repair Services */}
        <div className="w-6/12 space-y-6">
          <h2 className="title-bold">Printer Repair Services</h2>
          <p className="txt-bold">
            Our team of experts specializes in providing fast and effective printer repair services in Dubai. We can help you with various printer issues, such as slow printing, cartridge problems, color contrast issues, inkjet errors, and graphic glitches. Whether it’s your office or home printer, our skilled technicians are well-equipped to fix any problem efficiently. Count on us for reliable, high-quality printer services that will quickly resolve all your printer issues in Dubai.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">We repair all types of printers</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">Our team consists of highly experienced and professional workers</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">We are the best and recommended printer repair service in UAE/Dubai</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-black" />
              <span className="font-semibold text-black">Printer Cartridge & toner repair/refill</span>
            </li>
          </ul>
          <button className="btn-md mt-8">Printer Repair</button>
        </div>
      </div>
    </div>
  );
};

export default PrinterServices;
