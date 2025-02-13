import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="w-4/5 mx-auto py-24 flex justify-between">
        <div className="">
            <h3 className="italic font-bold text-gray-500">Al Al-Ahbar Office Equip Trd</h3>
            <h1 className="text-4xl text-gray-600 mt-4">Al-Ahbar </h1>
            <div className="w-20 h-0.5 bg-darkpink my-4"></div>
        </div>
        <div className="flex flex-col max-w-2/3">
            {/* Icons */}
            <div className="flex space-x-6 my-4">
                <img src="/into-img1.webp" alt="Printer" className="w-1/3" />
            </div>

            <div className="flex flex-col gap-5">
                <p className="txt-bold">
                    Al-Ahbar  is a leading provider of printing solutions in Dubai, Abu Dhabi, Sharjah, and the UAE. Our services include printer repair, maintenance, rental, and lease. Whether you own an HP, Canon, Epson, Brother, or any other printer, we have the expertise to handle it with precision. We can handle any type of printer repair, from simple paper jams to complex hardware issues. We also offer preventive maintenance services to help keep your printers running smoothly.
                </p>
                <p className="txt-bold">
                    In addition to printer repair and maintenance, we also offer printer rentals, leases, and <span className="text-dpink font-semibold">Photocopying Services.</span> You can rent one from us if you only need a printer for a short time. If you need it for a longer period, leasing or buying a new one is also an option. With our wide selection of printer models, you're sure to find the perfect one to fit your needs.
                </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
                <button className="btn-md">Learn More</button>
                <button className="border border-darkpink text-darkpink hover:bg-darkpink hover:text-white px-6 py-2 rounded">Get A Quote</button>
            </div>

        </div>
    </div>
  );
};

export default Intro;
