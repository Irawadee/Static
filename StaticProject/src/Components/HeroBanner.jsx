import React from 'react';

export default function HeroBanner ({ backgroundImage, buttonText, buttonLink }) {

    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '1280px', // Adjust the height according to your design
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={bannerStyle}>
            <a href={buttonLink}>
                <button>{buttonText}</button>
            </a>
        </div>
    );
};

