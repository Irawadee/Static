import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import fbimage from '../Images/facebook.png'
import iimage from '../Images/ig.png'
import timage from '../Images/twitter.png'




function ContactBox() {
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

            <Paper elevation={3} sx={{ width: '100%', height: '100%', backgroundColor: '#EFE2BA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5"
                    sx={{
                        color: '#D99000',    // Set text color
                        fontWeight: 'bold',  // Set font weight
                        fontFamily: 'Optima',
                    }}> Our Contact Details</Typography>

                <Typography variant="subtitle1"
                    sx={{
                        color: '#000000',    // Set text color
                        fontFamily: 'Optima',
                        fontSize: '20px',
                        my: 10
                    }}> Address : 28A Linwood Avenue,  Mount Albert,
                    <br /> Auckland, New Zealand 1025
                    <br /><br />
                    Email: Destiny@gmail.com
                    <br /><br />
                    Tel: 022-222-2222
                </Typography>

            </Paper>

            <Paper elevation={3} sx={{ width: '100%', height: '100%', backgroundColor: '#EFE2BA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >

                <Typography variant="h5"
                    sx={{
                        color: '#D99000',    // Set text color
                        fontWeight: 'bold',  // Set font weight
                        fontFamily: 'Optima',
                        mt: '60px'
                    }}> Opening Hours</Typography>

                <Typography variant="subtitle1"
                    sx={{
                        color: '#000000',    // Set text color
                        fontFamily: 'Optima',
                        fontSize: '20px',
                        my: 10,
                        mx: 10,
                        textAlign: 'center',  // Center-align text
                    }}> Mon - Fri &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.00 AM - 10.00 PM
                    <br /><br />
                    Sat - Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.00 AM - 12.00 AM
                    <br /><br />
                    Public Holiday &nbsp;&nbsp; 11.00 AM - 12.00 AM
                    <br /><br />

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>

                        <img src={fbimage} alt="fbicon" style={{ width: '10%', height: 'auto' }} />
                        <img src={iimage} alt="igicon" style={{ width: '10%', height: 'auto' }} />
                        <img src={timage} alt="twittericon" style={{ width: '10%', height: 'auto' }} />
                    </div>
                </Typography>

            </Paper>
        </Box>
    );
}

export default ContactBox;