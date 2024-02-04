import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../Images/DestinyLogoR.png'; // Import the logo file
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import useMediaQuery from '@mui/material/useMediaQuery';




function Header() {

  const isMobile = useMediaQuery('(max-width: 500px)');

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#08123C', paddingTop: '0', paddingBottom: '0', marginTop: 0 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ padding: 0, display: 'flex', alignItems: 'center', height: '4.5rem', position: 'relative' }}>

          {/* Hamburger Menu Icon for Mobile */}
          {isMobile && (
            <MenuIcon
              sx={{ display: { xs: 'block', md: 'none' }, color: 'white', fontSize: '2.5rem' }}
              onClick={handleMobileMenuToggle}
            />
          )}

          {/* Logo */}
          <Link to="/">
            <img src={logo} style={{ height: 60, marginLeft: isMobile ? '5rem' : 0 }} alt="Logo" />
          </Link>


          {/* Booking Button (moved after the logo on mobile) */}

          {isMobile && (
            <Button variant="contained" sx={{ ...buttonStylesmobile, marginRight: '1rem' }}>
              <Link to="/booking">Booking</Link>
            </Button>
          )}

          {isMobile ? null : (
            // Links for Desktop
            <>
              <Typography variant="h6" noWrap sx={{
                flexGrow: 1,
                fontFamily: 'Optima',
                fontWeight: 500,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1rem', // rem unit is the most accurate for every responsive proposes.
                textAlign: 'center',
                marginLeft: '250px',
                marginRight: '-60px',


                '& a': {
                  color: 'inherit',
                  textDecoration: 'none',

                  '&:hover': {
                    color: '#D99000', // Change to your desired hover color
                  },
                },



              }}>
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

              <Button variant="contained" sx={{ ...buttonStyles, marginRight: '1rem' }}>
                <Link to="/booking">Booking</Link>
              </Button>
            </>
          )}


        </Toolbar>
      </Container>

      {isMobile && mobileMenuOpen && (
        // Mobile Menu
        <div
          sx={{
            position: 'absolute',
            top: '1rem', // Adjust the top position based on your design
            left: 50,
            right: 0,
            width: '100%',
            backgroundColor: '#08123C',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <Typography variant="h6" noWrap sx={linkStylesmobile}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" noWrap sx={linkStylesmobile}>
            <Link to="/aboutus">About Us</Link>
          </Typography>
          <Typography variant="h6" noWrap sx={linkStylesmobile}>
            <Link to="/contactus">Contact Us</Link>
          </Typography>
          <Typography variant="h6" noWrap sx={linkStylesmobile}>
            <Link to="/gallery">Gallery</Link>
          </Typography>
        </div>
      )}


    </AppBar>
  );
}


// ** create seperated style to use in each element, good code practice and more systematic.

const linkStylesmobile = {
  flexGrow: 1,
  fontFamily: 'Optima',
  fontWeight: 500,
  letterSpacing: '0.2rem',
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '1.1rem', // rem unit is the most accurate for every responsive proposes.
  marginLeft: 15,
  padding: 2,



  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },

};


const linkStyles = {
  flexGrow: 0.5,
  fontFamily: 'Optima',
  fontWeight: 500,
  letterSpacing: '.1rem',
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '1rem', // rem unit is the most accurate for every responsive proposes.
  textAlign: 'center',


  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: '#D99000', // Change to your desired hover color
    },
  },


  // we can put extra css style for specific tag element to combine within the custom styles.
  // extra css style
  '@media (max-width: 1000px)': {
    // Adjust styles for smaller screens, responsive assistances.
    marginLeft: 0,
    width: '6rem',
    fontSize: '0.7rem',
  },



};



const buttonStylesmobile = {
  color: 'black',
  backgroundColor: '#D99000',
  borderRadius: '2rem',
  width: '6rem',
  fontSize: '0.7rem',
  fontFamily: 'Optima',
  fontWeight: 400,
  marginLeft: 3,


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
  marginLeft: '10px',

  '@media (max-width: 1000px)': {
    // Adjust styles for smaller screens
    marginLeft: 0,
    width: '6rem',
    fontSize: '0.7rem',
  },

  '&:hover': {
    backgroundColor: '#A9A9A9',
  },
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
};



export default Header;
