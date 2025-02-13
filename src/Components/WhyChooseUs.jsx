const WhyChooseUs = () => {
    return (
      <section className="bg-gray-300 py-20">
        <div className="containar flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us...?</h2>
            <div className="w-32 border-b-2 border-darkpink mt-6"></div>
          </div>
  
          {/* Right Side */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-12">
            <p className="txt-bold text-lg">
              <strong>Al-Ahbar </strong> is the best printer solution center in Dubai. We provide
              Printer repair, Printer Lease, and rental services, 
              <span className="text-dpink font-semibold"> Photocopy service Center</span>, 
              and all printer brands for sale. You don’t need to find a separate shop or service for
              your printer’s solution. From Al-Ahbar , you can get all these requirements in one place. 
              Al-Ahbar  is the best place for all your printing needs.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  