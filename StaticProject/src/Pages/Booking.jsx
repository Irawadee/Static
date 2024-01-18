import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import bookingimage from '../Components/Booking.jpg'
import MainForm from '../Components/MainForm'


function Booking() {
  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={bookingimage} />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }} >
        <MainForm/>
      </div>

      <Footer />
    </>
  )
}

export default Booking