import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import bookingimage from '../Images/Booking.jpg'
import TextDisplay from '../Components/TextDisplay'

function BookingConfirm() {
  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={bookingimage} />
      </div>
      <div>
        <TextDisplay title="Thank You!" content="Your booking is confirmed." />
      </div>
      <Footer />
    </>
  )
}

export default BookingConfirm