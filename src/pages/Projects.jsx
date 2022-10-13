import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import '../styles/Project.css'

const Projects = () => {
    return (
        <div>
            <Container>
            <div className="body__page">
                <section className="container__card" id='skill'>
            
                    <div className="card c1">
                        <div className="icon">
                            <div className='flex'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <p>Ecommerce</p>
                            </div>
                        </div>
                        <div className="info__description">
                            <p>Application made in ReactJs, of Flux architecture.
                                Use the following libraries: react-router-dom, bootstrap, react-redux, react-hook-form</p>
                            <Button 
                                variant="danger"
                                href="https://incandescent-semifreddo-ffd87f.netlify.app/" 
                                target="_blank"
                            >
                                See</Button>
                        </div>
                    </div>
            
                    <div className="card c2">
                        <div className="icon">
                            <div className='flex'>
                                <i className="fa-solid fa-list-check"></i>
                                <p>CRUDS</p>
                            </div>
                        </div>
                        <div className="info__description">
                            <p>Application made in ReactJs, the concepts of: 
                                HTTP requests with axios, Conditional Rendering, 
                                Controlled Inputs, React Hook Form and Redux are applied.</p>                        
                            <Button 
                                variant="info"
                                href="https://crud-fabian.netlify.app/" 
                                target="_blank"
                            >
                                See
                                </Button>
                        </div>
                    </div>
            
                    <div className="card c3">
                        <div className="icon">
                            <div className='flex'>
                                <i className="fa-solid fa-database"></i>
                                <p>Poke Api</p>
                            </div>
                        </div>
                        <div className="info__description">
                            <p>Application made in ReactJs, the concepts of: HTTP requests with axios, 
                                Conditional Rendering, Controlled Inputs, Hooks and Redux are applied.</p>
                            <Button 
                                variant="warning"
                                href="https://clever-rabanadas-54dd82.netlify.app/#/pokedex" 
                                target="_blank"
                            >
                                See
                                </Button>
                        </div>
                    </div>

                    <div className="card c4">
                        <div className="icon">
                            <div className='flex'>
                                <i className="fa-solid fa-temperature-arrow-up"></i>
                                <p>Climate</p>
                            </div>
                        </div>
                        <div className="info__description">
                            <p>Simple application, made in ReactJs, HTTP requests are applied with axios and time 
                                indicators are delivered according to the location. Location permission is requested from the user..</p>
                            <Button variant="info">See</Button>
                        </div>
                    </div>

                    <div className="card c5">
                        <div className="icon">
                            <div className='flex'>
                                <i className="fa-solid fa-palette"></i>
                                <p>Glasmorfismo</p>
                            </div>
                        </div>
                        <div className="info__description">
                            <p> Diffuse background generator, the user varies, size, color, 
                                borders and blur. Application designed in Html5, Css and JavaScrip..</p>
                            
                            <Button>See</Button>
                        </div>
                    </div>

                    <div className="card c6">
                        <div className="icon">
                            <div className='flex'>
                                <i className="fa-solid fa-person-military-to-person"></i>
                                <p>Rick and Morti</p>
                            </div>
                        </div>
                        <div className="info__description">
                            <p> Application made in ReactJs, the concepts of: HTTP requests with axios, 
                                Conditional Rendering, Controlled Inputs, Hooks and Redux are applied.</p>
                            
                            <Button 
                                variant="info"
                                href="https://glittering-marigold-930bf8.netlify.app/" 
                                target="_blank"
                            >
                                See
                            </Button>
                        </div>
                    </div>

                </section>
            </div>
            </Container>
        </div>
    );
};

export default Projects;