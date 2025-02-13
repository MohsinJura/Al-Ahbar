const WhatWeOffer = () => {
    return (
      <section className="bg-slate-200 py-32">
        <div className="containar flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <div className="w-32 border-b-2 border-darkpink mt-6"></div>
          </div>
  
          {/* Right Side */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-12">
            <p className="txt-bold font-bold text-lg">
                We are dedicated to providing a wide range of services, including printer repair,
                <span className="text-dpink font-semibold"> photocopying </span>, 
                Printer rental, 
                <span className="text-dpink font-semibold"> Printer sale </span>, 
                and various other tasks that we can easily handle related to printers. 
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeOffer;
  