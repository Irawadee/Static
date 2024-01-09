import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Container from '@mui/material/Container';

function App() {

  // ** for section seperation and fix the stitching among components, use the approach of outline the page with in a div 
  // then seperate each part of the pages with container 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container style={{ flex: 1, padding: '2rem' }}>
        {/* Your main content goes here */}
      </Container>
      <Footer />
    </div>
  );
}
export default App
