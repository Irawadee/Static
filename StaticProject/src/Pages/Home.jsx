import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroBannerComponent from "../Components/HeroBanner";
import BackgroundImage1 from "../Images/ChefBanner.jpg";
import BackgroundImage2 from "../Images/FoodBanner.jpg";
import FinishBanner from "../Components/FinishBanner";
import BannerButton from "../Components/BannerButton";

function Home() {
  return (
    <>
      <Header />

      <HeroBannerComponent />

      <BannerButton
        backgroundImage={BackgroundImage1}
        
      />

      <FinishBanner
        backgroundImage={BackgroundImage2}
        
      />

      <Footer />
    </>
  );
}

export default Home;
