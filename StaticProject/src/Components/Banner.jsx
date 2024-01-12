import React from 'react';

const Banner = ({ backgroundImage }) => {
    const bannerStyle = {
        position: 'relative',
        width: '1536px',
        height: '450px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop:'20px'
    };

    return <div style={bannerStyle}></div>;
};

export default Banner;
