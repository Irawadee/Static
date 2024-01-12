import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroBannerComponent from '../Components/HeroBanner'
import Banner from '../Components/Banner'
import BackgroundImage1 from '../Components/ChefBanner.jpg'
import BackgroundImage2 from '../Components/FoodBanner.jpg'
import FinishBanner from '../Components/FinishBanner'
import BannerButton from '../Components/BannerButton'

function Home() {
    return (
        <>
            <Header />
            <div>
                <HeroBannerComponent />
            </div>
            <div>
                <BannerButton backgroundImage={BackgroundImage1} buttonText="About Us →" buttonLink="/aboutus" />
            </div>
            <div>
                <FinishBanner backgroundImage={BackgroundImage2} buttonText="Contact Us →" buttonLink="/contactus" />
            </div>

            <Footer />
        </>
    )
}

export default Home