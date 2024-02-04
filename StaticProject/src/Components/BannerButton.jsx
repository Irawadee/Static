import React, { useState } from 'react';

// ** This set of command line enable prop usage --> const componentname = ({ prop1,prop2,prop3 }) => { }; 

const BannerButton = ({ backgroundImage, buttonText, buttonLink }) => {

    const [isHovered, setHovered] = useState(false);


    const fbannerStyle = {
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
        // To make the button flexible when adjust the browser screen use the approach of this. 
        //* Make the component position to be absolute then give the value of direction ex. bottom and right in px.
        // position: 'absolute',
        // bottom: '10px', // Adjust the bottom position as needed
        // right: '80px', // Adjust the right position as needed

        position: 'absolute',
        bottom: '10px', // Adjust the bottom position as needed
        right: '80px', // Adjust the right position as needed
        backgroundColor: isHovered ? '#A9A9A9' : '#D99000',
        color: 'black',
        borderRadius: '2rem',
        padding: '15px 40px',
        fontSize: '1rem',
        textDecoration: 'none',
        fontWeight: 'bold',
        
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
                color: '#D99000', // Change to your desired hover color
            },
        },
    };

    // button height 44 px



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

export default BannerButton;