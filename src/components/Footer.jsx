import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <p>copyright©Fabian FullStack</p>
            <p>Phone: +57 3148218808</p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Email: fagodu5@gmail.com</a>
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