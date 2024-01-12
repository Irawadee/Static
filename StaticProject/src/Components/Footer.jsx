import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '0vh',  // Set the minimum height of the container of the viewport height, this control how much space between 
            // previous component and footer
        }}>



            {/* // style the footer */}
            <footer style={{
                backgroundColor: '#08123C',
                padding: '20px',
                color: '#FFFFFF',
                textAlign: 'center',
                // the set style to make footer stay in the bottom of the browser window
                position: 'relative',
                marginTop: 'auto',  // Use margin-top: auto to push the footer to the bottom
                width: '100%'
            }}>
                {`Copyright © Destiny Restaurant ${year}`}
            </footer>

        </div>
    );
}

// How to make the footer bar show in 100% ratio on responsive mode, try setting div style on flexdirection to row, and set width
// 100% on footerstyle, it still not work.



