import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import galleryimage from '../Images/GalleryBanner.jpg'
import Banner from '../Components/Banner'
import PhotoBox from '../Components/PhotoBox'


function Gallery() {


  const imageNameToDisplaySet1 = ['Gallery1.jpg', 'Gallery2.jpg', 'Gallery3.jpg']; // Specify the image names you want to display
  const imageNameToDisplaySet2 = ['Gallery4.jpg', 'Gallery5.jpg', 'Gallery6.jpg']; // Specify the image names you want to display
  const imageNameToDisplaySet3 = ['Gallery7.jpg', 'Gallery8.jpg', 'Gallery9.jpg']; // Specify the image names you want to display

  const altText = ['']; // leave blank since the alt array will show the same on each photos, specify individual alt in switch case instead.

  return (
    <>
      <Header />
        <Banner backgroundImage={galleryimage} />
        <PhotoBox imageName={imageNameToDisplaySet1} alt={altText} />
        <PhotoBox imageName={imageNameToDisplaySet2} alt={altText} />
        <PhotoBox imageName={imageNameToDisplaySet3} alt={altText} />
      <Footer />
    </>
  )
}

export default Gallery