import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import '../styles/Skill.css'

const Skill = () => {
    return (
        <div>
            <Container>
            <div className="body__page">
                <section className="container__card" id='skill'>
            
                    <div className="card c1">
                        <div className="icon">
                            <i className="fab fa-html5"></i>
                        </div>
                        <div className="info__description">
                            <p> 
                                Fluent handling to layout in HTM5: Images, texts, input, 
                                buttons, links, implementing semantics in labels.</p>
                            <Button variant="danger">More</Button>
                        </div>
                    </div>
            
                    <div className="card c2">
                        <div className="icon">
                            <i className="fa-brands fa-css3-alt"></i>
                        </div>
                        <div className="info__description">
                            <p>Organized work in independent style sheets, under international parameters.
                                Fluent handling of display flex and grid.</p>                        
                            <Button variant="info">More</Button>
                        </div>
                    </div>
            
                    <div className="card c3">
                        <div className="icon">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <div className="info__description">
                            <p>Logic and understanding are my weapon; I'm good at error handling and I have knowledge 
                                in advanced JavaScrip.</p>
                            <Button variant="warning">More</Button>
                        </div>
                    </div>

                    <div className="card c4">
                        <div className="icon">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div className="info__description">
                            <p>
                                Fluid handling of components, hooks, HTTP requests with Axios, life cycle management of components, forms and implementation 
                                of libraries such as React Router, Redux.</p>
                            <Button variant="info">More</Button>
                        </div>
                    </div>

                    <div className="card c5">
                        <div className="icon">
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="info__description">
                            <p> 
Excellent version handling with git; Use of the basic commands: branch, checkout, status, add, commit, push, revert and merge.</p>
                            
                            <Button>More</Button>
                        </div>
                    </div>

                    <div className="card c6">
                        <div className="icon">
                            <i className="fa-brands fa-bootstrap"></i>
                        </div>
                        <div className="info__description">
                            <p> 
Creation of clean and responsive interfaces with Bootstrap.</p>
                            
                            <Button variant="info">More</Button>
                        </div>
                    </div>

                </section>
            </div>
            </Container>
        </div>
    );
};

export default Skill;