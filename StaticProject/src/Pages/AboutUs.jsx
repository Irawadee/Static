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
      <div>
        <Banner backgroundImage={aboutimage} />
      </div>
      <div >
        <PhotoBoxLeft image={Establisher} alt='Establisher' topic='Description' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' />
      </div>
      <div>
        <PhotoBoxRight image={Heir} alt='Heir' topic='Description' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' />
      </div>
      <Footer />
    </>
  )
}

export default AboutUs