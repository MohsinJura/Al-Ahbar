import React from 'react'
import Banner from '../Components/Banner'
import ServiceBox from '../Components/serviceBox'
import Intro from '../Components/Intro'
import ContactBox from '../Components/ContactBox'
import PrinterServices from '../Components/PrinterServices'
import FixedBtnz from '../Components/FixedBtnz'
import WhyChooseUs from '../Components/WhyChooseUs'
import CompanySection from '../Components/CompanySection'
import WhatWeOffer from '../Components/WhatWeOffer'
import SupportSection from '../Components/SupportSection'
import CustomerReviews from '../Components/CustomerReviews'
import WhyChooseTeam from '../Components/WhyChooseTeam'

const Home = () => {
  return (
    <>
        <Banner />
        <div className='relative'>
          <div className='-mt-28'>
            <ServiceBox />
          </div>
        </div>
        <Intro/>
        <ContactBox />
        <PrinterServices />
        <WhyChooseUs />
        <CompanySection />
        <WhatWeOffer />
        <SupportSection />
        <WhyChooseTeam />
        <CustomerReviews />

        <FixedBtnz />
    </>
  )
}

export default Home