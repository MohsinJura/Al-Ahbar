import React from 'react';

const ServiceBox = () => {
  return (
    <div className="bg-gray-900 containar">
      <div className="w-full flex justify-center py-16 text-center">
        <div className="flex md:flex-row flex-col gap-20">
          <div className="p-3">
            <h3 className="text-2xl font-bold text-dpink">High Skilled / Professional Staff</h3>
            <p className="text-lg mt-3">Experts from all over UAE</p>
          </div>

          <div className="p-3">
            <h3 className="text-2xl font-bold text-dpink">Punctual Delivery Time</h3>
            <p className="text-lg mt-3">99% Delivered On Time</p>
          </div>

          <div className="p-3">
            <h3 className="text-2xl font-bold text-dpink">High Rated Company</h3>
            <p className="text-lg mt-3">100% Safe & Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;