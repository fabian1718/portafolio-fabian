import React from 'react';
import '../styles/Footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <p>copyright©Fabian FullStack</p>
            <a 
                className='linkedin' 
                href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
                target="_blank"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>
            
        </div>
    );
};

export default Footer;