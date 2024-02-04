import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import aboutimage from '../Images/AboutUs.jpg'
import PhotoBoxLeft from '../Components/PhotoBoxLeft'
import Establisher from '../Images/Establisher.jpg'
import Heir from '../Images/Heir.jpg'
import PhotoBoxRight from '../Components/PhotoBoxRight'


function AboutUs() {
  return (
    <>
      <Header />
        <Banner backgroundImage={aboutimage} />
        <PhotoBoxLeft image={Establisher} alt='Establisher' topic='Establisher' description='Lady Silas Cunningham, The origin of the restaurant owner. &nbsp;&nbsp;She designed and managed the premises in 1895. &nbsp;She and her close acquaintances, Lilla, Phoebe, and Emmeline created the exclusive and traditional menus for the business.
&nbsp;Lady Silas took care of Destiny restaurant for 45 years until she passed the property to her heirs. This is the precious legacy of the Cunninghams. 
' />
        <PhotoBoxRight image={Heir} alt='Heir' topic='Recent Possessor' description='Aaron Cunningham, He has had a passion for food creation and restaurant business management since he was young.&nbsp; He joined best culinary school in Germany, Lemperhaus in 2005 and got master degree in hospitality management from Leeds Beckett University in 2007. &nbsp;He takes over the restaurant since 2009.'/>
      <Footer />
    </>
  )
}

export default AboutUs