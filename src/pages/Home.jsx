import React from 'react';
import CarouselImg from '../components/CarouselImg';
import '../styles/Home.css'
import Skills from './Skills';


const Home = () => {
    return (
        <div className='container-home'>
            <div className='container-carousel-home'>
                <CarouselImg />
            </div>
            <Skills />
        </div>
    );
};

export default Home;