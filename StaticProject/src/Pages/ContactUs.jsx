import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import contactusimage from '../Images/ContactUs.jpg'
import ContactBox from '../Components/ContactBox'
import MapIframe from '../Components/MapIframe'

function ContactUs() {
  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={contactusimage} />
      </div>
      <div>
        <ContactBox />
      </div>
      <div>
        <MapIframe />
      </div>
      <Footer />
    </>
  )
}

export default ContactUs