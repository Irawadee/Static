import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function PhotoBoxRight({ image, alt, topic, description }) {
    return (

        <Box
            sx={{
                position: 'relative', // Use 'relative' if you want it to be positioned relative to its normal position  
                left: '120px', // adjust the box position in pages via direction value in 'px' , it effect the paper position too.
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 5, // Adjust margin between component in box (paper)
                    width: '100%', // Use percentage for width to make it flexible
                    maxWidth: '550px', // Limit the maximum width if needed
                    minWidth: '250px', // set minWidth to allow limited flexibility when adjust window.
                    height: '500px'

                },
                '@media (min-width: 300px)': {
                    '& > :not(style)': {
                        minWidth: '400px', // Increase minWidth for larger screens
                    },
                },
            }}
        >
            {/* The Style command set -->  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' will vertically center the content (image and text) within each Paper. */}
            {/* background:'#F3F0EB' */}


            <Paper elevation={0} sx={{ width: '100%', height: '100%', display: 'flex', background: '#F3F0EB', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5"
                    sx={{
                        color: '#D99000',    // Set text color
                        fontWeight: 'bold',  // Set font weight
                        fontFamily: 'Optima',


                    }}> {topic}</Typography>


                <Typography variant="subtitle1"
                    sx={{
                        color: '#000000',    // Set text color
                        fontFamily: 'Optima',
                        fontSize: '20px',
                        my: 5,
                        mx: 5,
                        width: '80%'
                    }}> {description}

                </Typography>
            </Paper>

            <Paper elevation={0} sx={{ width: '100%', height: '100%', display: 'flex', background: '#F3F0EB', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* objectFit: 'contain' enable the display photo to fully show without crop, but it will leave some space among the box to adjust} */}
                <img src={image} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Paper>

        </Box>

    );
}
export default PhotoBoxRight