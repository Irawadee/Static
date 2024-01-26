import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import notfoundimage from '../Images/PageNotFound.jpg'
import TextDisplay from '../Components/TextDisplay'
import { useRouteError } from "react-router-dom";


function Error() {

  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div>
        <Banner backgroundImage={notfoundimage} />
      </div>
      <div>
        {/* // set the conditional error messages display instead of plain text */}
        <TextDisplay title={`Error: ${error.statusText || error.message ? `${error.statusText || error.message}!` : ''}`}
          content=" Sorry, something went wrong." />
      </div>
      <Footer />
    </>
  )
}

export default Error