export default function SupportSection() {
    return (
      <div className="max-w-[80%] mx-auto py-24 flex flex-col md:flex-row gap-28 text-black">
        {/* Left Section */}
        <div className="w-[50%]">
          <h2 className="text-3xl font-semibold mb-12">Need any help?</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-xl">✔️</span>
              <p className="font-semibold">
                Need Assistance? Our dedicated team at Al-Ahbar is ready to
                assist you. Staffed with highly trained professionals, we're
                accessible via live chat and phone round-the-clock.
              </p>
            </div>
            <hr />
            <div className="flex items-start gap-3">
              <span className="text-xl">✔️</span>
              <p>
                For immediate support or emergencies, we recommend our responsive
                live chat program. Alternatively, you're welcome to email us or
                give us a call directly at the numbers provided. We're committed
                to ensuring your needs are met promptly.
              </p>
            </div>
            <hr />
            <div className="flex items-start gap-3">
              <span className="text-xl">✔️</span>
              <p>
                <strong>Email -</strong> info@al-ahbar.com
              </p>
            </div>
            <hr />
            <div className="flex items-start gap-3">
              <span className="text-xl">✔️</span>
              <p>
                <strong>Phone Number -</strong> Dubai: 0553466898 / Sharjah:
                065640057
              </p>
            </div>
            <hr />
            <div className="flex items-start gap-3">
              <span className="text-xl">✔️</span>
              <p className="txt-bold">
                At Al-Ahbar, we're here to help anytime you need.
              </p>
            </div>
          </div>
  
        </div>
  
        {/* Right Section */}
        <div className="w-[40%]">
          <h2 className="text-3xl font-bold text-dpink mb-6">
            Our Team Help You In All Printer Services
          </h2>
          <p className="txt-bold pl-3">
            Our experienced team is your ally in navigating the world of printer
            services. We collaborate with a multitude of renowned brands, such as
            Kyocera, Canon, Samsung, HP, Brother, Utax, Ricoh, Toshiba, and
            Konica Minolta, among others.
          </p>
          <p className="txt-bold pl-3 mt-4">
            Our reputation for technical proficiency and exceptional customer
            service sets us apart. Our distinctive and specialized team is
            dedicated to resolving your concerns swiftly. Our expansive knowledge
            and expertise ensure you receive fast, accurate service and quick
            turnaround on repairs. Trust in RahaCopier, where superior service
            meets client satisfaction.
          </p>
        </div>
      </div>
    );
  }
  