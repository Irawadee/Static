import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './DestinyLogoR.png'; // Import the logo file
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



function Header() {
  return (
    //Specify appbar style with sx{{}}
    // The shortcut command for additional component style is sx{{}} , contained them in the tag., for the main style you can 
    // specify after the open tag keyword.

    <AppBar position="fixed" sx={{ backgroundColor: '#08123C', paddingTop: '0', paddingBottom: '0', marginTop: 0 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ padding: 0, display: 'flex', alignItems: 'center', height: '4.5rem' }}>
          <Link to="/">
            <img src={logo} style={{ height: 60 }} alt="Logo" />
          </Link>

          {/* // nowrap means set this word to be in only one-line when the browser's width is changed */}
          <Typography variant="h6" noWrap sx={linkStyles}>
            <Link to="/">Home</Link>
          </Typography>

          <Typography variant="h6" noWrap sx={linkStyles}>
            <Link to="/aboutus">About Us</Link>
          </Typography>

          <Typography variant="h6" noWrap sx={linkStyles}>
            <Link to="/contactus">Contact Us</Link>
          </Typography>

          <Typography variant="h6" noWrap sx={linkStyles}>
            <Link to="/gallery">Gallery</Link>
          </Typography>

          <Button variant="contained" sx={buttonStyles}>
            <Link to="/booking">Booking</Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// ** create seperated style to use in each element, good code practice and more systematic.
const linkStyles = {
  flexGrow: 1,
  fontFamily: 'Optima',
  fontWeight: 500,
  letterSpacing: '.1rem',
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '1rem', // rem unit is the most accurate for every responsive proposes.
  marginLeft: 10,

  // we can put extra css style for specific tag element to combine within the custom styles.
  // extra css style
  '@media (max-width: 1000px)': {
    // Adjust styles for smaller screens, responsive assistances.
    marginLeft: 0,
    width: '6rem',
    fontSize: '0.7rem',
  },
  //extra css style
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
};

const buttonStyles = {
  color: 'black',
  backgroundColor: '#D99000',
  borderRadius: '2rem',
  width: '8rem',
  fontSize: '0.9rem',
  fontFamily: 'Optima',
  fontWeight: 400,
  marginLeft: 10,

  '@media (max-width: 1000px)': {
    // Adjust styles for smaller screens
    marginLeft: 0,
    width: '6rem',
    fontSize: '0.7rem',
  },

  '&:hover': {
    backgroundColor: '#D99000',
  },
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
};
export default Header;
