import React, { useState } from 'react';

const FinishBanner = ({ backgroundImage, buttonText, buttonLink }) => {
    const [isHovered, setHovered] = useState(false);

    const fbannerStyle = {
        // To make banner flexible when adjust the browser, use width in % unit and make the position relative.
        position: 'relative',
        width: '100%', // Use percentage for width to make it flexible
        // width: '1536px',
        height: '600px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const responsiveStyles = {
        '@media (max-width: 768px)': {
            height: '300px', // Adjust the height for smaller screens
        },
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: '10px', // Adjust the bottom position as needed
        left: '80px', // Adjust the right position as needed
        backgroundColor: isHovered ? '#A9A9A9' : '#D99000',
        color: 'black',
        borderRadius: '2rem',
        padding: '15px 40px',
        fontSize: '1rem',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    return <div style={{ ...fbannerStyle, ...responsiveStyles }}>
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
    </div>;
};

export default FinishBanner;
