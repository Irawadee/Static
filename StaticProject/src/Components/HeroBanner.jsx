import Heroimage from '../Images/HBanner.jpg'
import React, { useState } from 'react';



// The new technique of style-contained component create without function ,
// then call those component to use in the full component function as below.


// create style-contained component create without function
const HeroBanner = ({ buttonText, buttonLink }) => {

    const [isHovered, setHovered] = useState(false);

    const herobannerStyle = {
        position: 'relative',
        width: '100%',
        // width: '1536px',
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
        // To make the button flexible when adjust the browser screen use the approach of this. 
        //* Make the component position to be absolute then give the value of direction ex. bottom and right in px.
        // position: 'absolute',
        // bottom: '10px', // Adjust the bottom position as needed
        // right: '80px', // Adjust the right position as needed

        position: 'absolute',
        bottom: '10px', // Adjust the bottom position as needed
        left: '80px', // Adjust the right position as needed
        backgroundColor: isHovered ? '#A9A9A9' :'#D99000',
        color:'black',
        borderRadius: '2rem',
        padding: '15px 40px',
        fontSize: '1rem',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '#D99000', // Change to your desired hover color
        },

    };

    return (
        <div style={herobannerStyle}>
            {buttonText && (
                <a
                    href={buttonLink}
                    style={buttonStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
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


