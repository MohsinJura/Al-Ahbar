import React from 'react';

const ContactBox = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="flex md:flex-row flex-col justify-between items-center containar py-10">
          <div className="p-3">
            <h3 className="text-xl font-bold text-dpink">Looking for Printers or s for rental?</h3>
          </div>
          <div className="p-3">
            <button className='btn-md'>Contact Us</button>
          </div>
      </div>
    </div>
  );
};

export default ContactBox;