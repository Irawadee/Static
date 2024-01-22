import React from 'react'

function MapIframe() {
    return (
        <div>
            <iframe
                width='100%'
                height="450px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4518857177795!2d175.0766036758398!3d-36.8316522722382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72c8477ce907c3%3A0xba751eff063d0720!2sDestiny%20Bay%20Wines!5e0!3m2!1sen!2snz!4v1705894631171!5m2!1sen!2snz"
                title="Destiny Restaurant location"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                // Good code practice in using iframe.
                loading="lazy" //  the command to set the browser to defers the loading of the iframe until it enters the user's viewport. 
                referrerPolicy="no-referrer-when-downgrade" // This helps in controlling the information passed through the Referer header for privacy and security reasons.
            >
            </iframe>
        </div>
    )
}

export default MapIframe