import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import G1 from '../Images/Gallery1.jpg'
import G2 from '../Images/Gallery2.jpg'
import G3 from '../Images/Gallery3.jpg'
import G4 from '../Images/Gallery4.jpg'
import G5 from '../Images/Gallery5.jpg'
import G6 from '../Images/Gallery6.jpg'
import G7 from '../Images/Gallery7.jpg'
import G8 from '../Images/Gallery8.jpg'
import G9 from '../Images/Gallery9.jpg'


// function to enable the array photo display as prop. 

function getImageComponent(imageName, alt, index) {
    switch (imageName) {
        case 'Gallery1.jpg':
            return (
                <img key={index} src={G1} alt={`${alt} Galleryphoto 1`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery2.jpg':
            return (
                <img key={index} src={G2} alt={`${alt} Galleryphoto 2`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery3.jpg':
            return (
                <img key={index} src={G3} alt={`${alt} Galleryphoto 3`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery4.jpg':
            return (
                <img key={index} src={G4} alt={`${alt} Galleryphoto 4`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery5.jpg':
            return (
                <img key={index} src={G5} alt={`${alt} Galleryphoto 5`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery6.jpg':
            return (
                <img key={index} src={G6} alt={`${alt} Galleryphoto 6`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery7.jpg':
            return (
                <img key={index} src={G7} alt={`${alt} Galleryphoto 7`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery8.jpg':
            return (
                <img key={index} src={G8} alt={`${alt} Galleryphoto 8`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );
        case 'Gallery9.jpg':
            return (
                <img key={index} src={G9} alt={`${alt} Galleryphoto 9`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            );

        default:
            return null;
    }

}


function PhotoBox({ imageName, alt }) {
    return (

        <div style={{ marginLeft: '50px' }}>
            <Box
                sx={{
                    position: 'relative', // Use 'relative' if you want it to be positioned relative to its normal position  
                    left: '50px', // adjust the box position in pages via direction value in 'px' , it effect the paper position too.
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 5, // Adjust margin between component in box (paper)
                        width: '100%', // Use percentage for width to make it flexible
                        maxWidth: '250px', // Limit the maximum width if needed
                        minWidth: '250px', // set minWidth to allow limited flexibility when adjust window.
                        height: '380px'

                    },
                    '@media (min-width: 300px)': {
                        left: '-20px',
                        '& > :not(style)': {
                            minWidth: '400px', // Increase minWidth for larger screens
                        },
                    },
                }}
            >
                {imageName.map((imageName, index) => (

                    <Paper key={index} sx={{
                        width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        '&:hover': {
                            // Add your hover styles here
                            filter: 'grayscale(50%)',
                        },
                    }}>

                        {/* objectFit: 'contain' enable the display photo to fully show without crop, but it will leave some space among the box to adjust} */}

                        {getImageComponent(imageName, alt, index)}

                    </Paper>
                ))}
            </Box>
        </div>
    )
}

export default PhotoBox