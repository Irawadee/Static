import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import notfoundimage from '../Components/PageNotFound.jpg'
import TextDisplay from '../Components/TextDisplay'

function NotFound() {
  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={notfoundimage} />
      </div>
      <div>
        <TextDisplay title="Error 404 Not Found!"
          content=" Sorry, we can not find the page:(" />
      </div>
      <Footer />
    </>
  )
}

export default NotFound