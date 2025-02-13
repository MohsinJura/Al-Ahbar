import React from 'react'
import Section from './Section';
  
const CompanySection = () => {
    return (
      <div className="max-w-[95%] mx-auto p-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Section title="Our Mission">
            We aim to build stronger business relationships by providing exceptional service and attention. We offer
            complete management solutions for your printer needs, including training, installation, and maintenance of
            recommended equipment.
            <br /><br />
            We understand that not everyone can afford new machines, so we provide the most affordable printer repair
            services in the UAE. If you’re unable to invest in new equipment, you can rely on us to repair your printers
            at budget-friendly prices.
            <br /><br />
            Choose us for reliable and cost-effective printer repairs. Contact us today to experience our commitment to
            excellence.
          </Section>
  
          <Section title="Our Advantage">
            Experience unparalleled service at RahaCopier, where we offer limitless options to cater to your specific
            needs. Adopt our “verify, then pay” policy, an approach that underscores our belief in the quality of our
            services. We’ve chosen not out of compulsion but for our outstanding service that effectively addresses your
            technical issues.
            <br /><br />
            Comprising a skilled, professional, and trusted team, we prioritize integrity and transparency in all our
            interactions. Unlike companies that exploit customers, we ensure top-notch service and reliable business
            practices.
          </Section>
  
          <Section title="Our Support">
            At RahaCopier, we go beyond deadlines. We’re dedicated to offering top-tier products, seamless service, and
            consistent communication to our valued clients. Our commitment extends to delivering tailored solutions that
            meet your specific needs.
            <br /><br />
            Trust in our capable team, chosen worldwide for their dedication and expertise. Should any issues arise,
            don’t hesitate to reach out. We’re here for you, wherever you are.
          </Section>
        </div>
      </div>
    );
  }
  export default CompanySection
  