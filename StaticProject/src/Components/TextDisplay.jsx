import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// set prop title and content
export default function TextDisplay({ title, content }) {
    return (
        <Box sx={{

            width: '100%',
            maxWidth: 500,
            textAlign: 'center',  // Align the text in the center
            mt: 2,               // Add margin-top for spacing
            mx: 'auto',          // Center the box horizontally
            backgroundColor: '#F0F0F0',  // Add background color
            padding: 15,           // Add padding


        }}>
            <Typography variant="h4"
                sx={{
                    color: '#D99000',    // Set text color
                    fontWeight: 'bold',  // Set font weight
                    fontFamily: 'Optima',
                    width:'100%'

                }}>
                {/* // specify the prop in use */}

                {title && <>{title} <br /><br /></>}
                {content}

            </Typography>
        </Box>
    );
}

