import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import contactusimage from '../Components/ContactUs.jpg'
import ContextBox from '../Components/ContextBox'
import MapIframe from '../Components/MapIframe'

function ContactUs() {
  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={contactusimage} />
      </div>
      <div>
        <ContextBox />
      </div>
      <div>
        <MapIframe />
      </div>
      <Footer />
    </>
  )
}

export default ContactUs