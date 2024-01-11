import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        // style the footer
        <footer style={{
            backgroundColor: '#08123C',
            padding: '20px',
            color: '#FFFFFF',
            textAlign: 'center'
            // marginTop: 'auto', // Push the footer to the bottom
        }}>
            {`Copyright © Destiny Restaurant ${year}`}
        </footer>
    );
}




