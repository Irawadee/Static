import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import notfoundimage from '../Images/PageNotFound.jpg'
import TextDisplay from '../Components/TextDisplay'

function Error() {
  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={notfoundimage} />
      </div>
      <div>
        <TextDisplay title="Error!"
          content=" Sorry, something went wrong." />
      </div>
      <Footer />
    </>
  )
}

export default Error