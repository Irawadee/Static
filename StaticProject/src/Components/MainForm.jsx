import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TextLabel from './TextLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';

const buttonStyles = {
    color: 'black',
    backgroundColor: '#D99000',
    borderRadius: '2rem',
    width: '20%',
    // width: '8rem',
    fontSize: '0.9rem',
    fontFamily: 'Optima',
    fontWeight: 400,
    marginLeft: 35,
    marginTop: 5,

    '@media (max-width: 1000px)': {
        marginLeft: 30,
        // width: '6rem',
        width: '20%',
        fontSize: '0.9rem',
    },

    '&:hover': {
        backgroundColor: '#D99000',
    },
    '& a': {
        color: 'inherit',
        textDecoration: 'none',
    },
};

// The date picker library can not be used although install the lates version of the packages, use optional textfield instead  

function MainForm() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column', // flexWrap: 'wrap',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',     // Center vertically
                '& > :not(style)': {
                    m: 10,
                    width: '100%', // Adjusted to take the full width // width: 700,
                    height: 700,
                    mx: 'auto', // Center horizontally
                    my: 'auto', // Center vertically

                },
            }}
        >
            <Paper elevation={0} sx={{ backgroundColor: '#F3F0EB', p: 2, borderRadius: 5, border: '0.5px groove #000000', width: '50%', maxWidth: '700px' }}>
                <Form >
                    <Typography variant="h4"
                        sx={{
                            color: '#D99000',
                            textAlign: 'center',
                            mt: 5, mb: 5,
                            fontWeight: 'bold', // Set font weight
                            fontFamily: 'Optima',
                        }}
                    >
                        Booking Form
                    </Typography>
                    <TextLabel> Name
                        {/* width: '300px', */}
                        <TextField sx={{ borderRadius: '80px', marginLeft: '50px', width: '50%' }}
                            required
                            id="outlined-required"
                            label="Required"
                            // some style attribute can not be specified in 'sx' so you have to style it individually in their own material ui 
                            // style prop
                            InputProps={{
                                style: {
                                    borderRadius: '30px',
                                    height: '40px'
                                },
                            }}
                        />
                    </TextLabel>


                    <TextLabel> Email
                        <TextField sx={{ borderRadius: '80px', marginLeft: '50px', width: '50%' }}
                            required
                            id="outlined-required"
                            label="Required"
                            // some style attribute can not be specified in 'sx' so you have to style it individually in their own material ui 
                            // style prop
                            InputProps={{
                                style: {
                                    borderRadius: '30px',
                                    height: '40px'
                                },
                            }}
                        />
                    </TextLabel>

                    <TextLabel >
                        Tel.
                        <TextField sx={{ borderRadius: '80px', marginLeft: '65px', width: '50%' }}
                            required
                            id="outlined-required"
                            label="Required"
                            // some style attribute can not be specified in 'sx' so you have to style it individually in their own material ui 
                            // style prop
                            InputProps={{
                                style: {
                                    borderRadius: '30px',
                                    height: '40px'
                                },
                            }}
                        />
                    </TextLabel>
                    <TextLabel> Date :
                        <TextField sx={{ borderRadius: '80px', marginLeft: '45px', marginRight: '30px', width: '25%' }}
                            required
                            id="outlined-required"
                            label="Required"
                            // some style attribute can not be specified in 'sx' so you have to style it individually in their own material ui 
                            // style prop
                            InputProps={{
                                style: {
                                    borderRadius: '30px',
                                    height: '40px'
                                },
                            }}
                        />

                        Time :

                        <TextField sx={{ borderRadius: '80px', marginLeft: '45px', width: '25%' }}
                            required
                            id="outlined-required"
                            label="Required"
                            // some style attribute can not be specified in 'sx' so you have to style it individually in their own material ui 
                            // style prop
                            InputProps={{
                                style: {
                                    borderRadius: '30px',
                                    height: '40px'
                                },
                            }}
                        />

                    </TextLabel>
                    <TextLabel > Additional Request : </TextLabel>
                    <div>
                        {/* width: '520px', */}
                        <TextField sx={{ marginLeft: '80px', width: '80%', marginTop: '-20px' }}
                            required
                            id="outlined-multiline-static"
                            multiline
                            rows={4}

                            // some style attribute can not be specified in 'sx' so you have to style it individually in their own material ui 
                            // style prop
                            InputProps={{
                                style: {
                                    borderRadius: '25px',
                                    height: '100px'
                                },
                            }}
                        />
                    </div>
                    <Button variant="contained" sx={buttonStyles}>
                        <Link to="/bookingconfirm">Submit</Link>
                    </Button>
                </Form>
            </Paper>
        </Box>
    );



}

export default MainForm