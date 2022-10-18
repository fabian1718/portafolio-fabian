import React from 'react';
import { Container } from 'react-bootstrap';
import photo from '../assets/Perfil.jpeg'
import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        <Container>
            <div className='conatiner-AboutMe'>
                <div  className='conatiner-photo'>
                    <img src={photo} alt="" />
                </div>
                <div>
                    <h1 style={{color:'red'}}> <span>Hi, I'm Fabian</span> Web designer and developer</h1>
                    <div className='container-i'>
                        <i class="fa-brands fa-instagram color-intagram"></i>
                        <i class="fa-brands fa-facebook color-facebook"></i>
                        <i class="fa-brands fa-twitter color-celeste"></i>
                        <i class="fa-brands fa-linkedin color-blue"></i>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;