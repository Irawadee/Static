import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import contactusimage from '../Images/ContactUs.jpg'
import ContactBox from '../Components/ContactBox'
import MapIframe from '../Components/MapIframe'
import { margin } from '@mui/system'

function ContactUs() {
  return (
    <>
      <Header />
      <Banner backgroundImage={contactusimage} />
      <ContactBox />
      <MapIframe />
      <Footer />
    </>
  )
}

export default ContactUs