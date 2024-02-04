import React from 'react';

const Banner = ({ backgroundImage }) => {
    const bannerStyle = {
        position: 'relative',

        // * When you want to make any component flexibly display when adjust the browser,
        // 1. use width in % unit
        // 2. create seperated responsive styles
        // 3. include the style in to the main component style

        // width: '1536px',
        width: '100%', // Use percentage for width to make it flexible
        height: '450px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '20px'
    };

    // 2. create responsive styles
    const responsiveStyles = {
        '@media (maxWidth: 768px)': {
            height: '300px', // Adjust the height for smaller screens
        },
    };

    // 3. include the style in to the main component style
    // if you want to include more than one style use this format --> style={{ ...style1, ...style2 }}
    return <div style={{ ...bannerStyle, ...responsiveStyles }}></div>;
};

export default Banner;
