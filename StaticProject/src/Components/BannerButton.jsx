import React from 'react'

// ** This set of command line enable prop usage --> const componentname = ({ prop1,prop2,prop3 }) => { }; 

const BannerButton = ({ backgroundImage, buttonText, buttonLink }) => {
    const fbannerStyle = {
        position: 'relative',
        width: '1536px',
        height: '600px',
        marginTop: '20px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
        fontWeight: 'bold',
        marginTop: '500px',
        marginLeft: '1250px',
        width: '120px', // size of button
        height: '30px', // size of button
        // command set to make the font center properly in button field 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

    };

    return <div style={fbannerStyle}>
        {buttonText && (
            <a href={buttonLink} style={buttonStyle}>
                {buttonText}
            </a>
        )}
    </div>;
};

export default BannerButton;