import React from 'react'
import Heroimage from './HBanner.jpg'


// The new technique of style-contained component create without function ,
// then call those component to use in the full component function as below.


// create style-contained component create without function
const HeroBanner = ({ buttonText, buttonLink }) => {
    const herobannerStyle = {
        position: 'relative',
        width: '1536px',
        height: '610px',
        backgroundImage: `url(${Heroimage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };


    const buttonStyle = {
        backgroundColor: '#D99000',
        color: 'black',
        borderRadius: '2rem',
        padding: '10px 35px',
        fontSize: '1rem',
        textDecoration: 'none',
        marginTop: '500px',
        marginLeft: '80px',
        width: '120px',
        height: '30px',
        fontWeight: 'bold',
        // command set to make the font center properly in button field 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        
    };

    return (
        <div style={herobannerStyle}>
            {buttonText && (
                <a href={buttonLink} style={buttonStyle}>
                    {buttonText}
                </a>
            )}
        </div>
    );
};

// combine the style-contained component within full component function

// HeroBannerComponent is the full component function 
function HeroBannerComponent() {

    const containerStyle = {
        marginTop: '65px', //Create the space from above component 
    };

    return (
        <div style={containerStyle}>
            {/* HeroBanner is the style-contained component without function */}
            <HeroBanner buttonText="Our Gallery →" buttonLink="/gallery" />
        </div>
    );
}

export default HeroBannerComponent;
// You can only export one function of each component 


