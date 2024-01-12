import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        // style the footer
        <footer style={{
            backgroundColor: '#08123C',
            padding: '20px',
            color: '#FFFFFF',
            textAlign: 'center',
            // the set style to make footer stay in the bottom of the browser window
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }}>
            {`Copyright © Destiny Restaurant ${year}`}
        </footer>
    );
}




