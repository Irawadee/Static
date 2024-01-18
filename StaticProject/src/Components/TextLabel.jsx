import React from 'react'
import Typography from '@mui/material/Typography';

// set the prop in main textlabel component 
const TextLabel = ({ children }) => {
    return (
        <Typography
            variant="h6"
            sx={{
                color: '#000000',
                ml: 10,
                mb: 5,
                fontWeight: 'normal',
                fontFamily: 'Optima',
            }}
        >
            {children}
        </Typography>
    );
}

export default TextLabel;