import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './DestinyLogoR.png'; // Import the logo file
import Button from '@mui/material/Button';


function Header() {
  return (
    //update app bar margin below.
    <AppBar position="static" sx={{ backgroundColor: '#08123C', paddingTop: '0', paddingBottom: '0', marginTop: 0 }}>
      <Container maxWidth="xl">
        {/* <Toolbar disableGutters> */}
        <Toolbar sx={{ padding: 0, height: '4.5rem' }}>
          {/* <AdbIcon sx={{ mr: 3 }} /> */}
          <a href='#'>
            <img
              src={logo} // Use the imported logo as the source
              style={{ marginRight: 300, height: 60 }}

            />
          </a>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              // mr: -3,
              mr: -10,
              flexGrow: 1,
              fontFamily: 'Optima',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem'

            }}
          >
            Home
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: -10,
              flexGrow: 1,
              fontFamily: 'Optima',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem',
              marginLeft: -20
            }}
          >
            About Us
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: -10,
              flexGrow: 1,
              fontFamily: 'Optima',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem',
              marginLeft: -20

            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              // mr: -10,
              flexGrow: 1,
              fontFamily: 'Optima',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem',
              marginLeft: -20
            }}
          >
            Gallery
          </Typography>
          <Button variant="contained" sx={{
            color: 'black',
            backgroundColor: '#D99000',
            borderRadius: '2rem',
            width: '8rem',
            fontSize: '0.9rem',
            fontFamily: 'Optima',
            fontWeight: 400,
            marginLeft: -20,
            '&:hover': {
              backgroundColor: '#EFE2BA', // Change to your desired hover color
            },

          }} >
            Booking
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
