import React from "react";
import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import '../styles/CarouselImg.css'

function CarouselImg() {

  const submit = () => {

    swal(
        {
            title:"currículum vitae", 
            text:`download successfully`, 
            icon: "success", 
            button:"Aceptar",
            timer: "2000"
        }
        );
  }

  const navigate = useNavigate();

  const navigateContact = () => {
    navigate('/contactme')
  };

  return (
      <Carousel fade className="carrousel">
        <Carousel.Item className="carrousel-item">
          <img 
            className="d-block w-100 carrousel-i"
            src='https://www.zeemo.com.au/upload/images/commercial.gif'
            alt="First slide"
            //    
          />
          <Carousel.Caption className="container-btn-carrousel">
            <Button 
              variant="warning"
              href="https://incandescent-semifreddo-ffd87f.netlify.app/" 
              target="_blank"
            >
              E-commerce
            </Button>{' '}

            <Button 
              onClick={navigateContact} 
              variant="info"
            >
              Contact
              </Button>{' '}
              
            <a onClick={submit} className='download-cv-carrousel' href='/CvFabianGonzalez.pdf' download>DOWNLOAD CV</a>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carrousel-item">
          <img 
            className="d-block w-100 carrousel-i"
            src="https://64.media.tumblr.com/5c833479b0f4e4f9f939cb22143da980/tumblr_nrxio2XVh01sapaufo1_540.gif"
            alt="Second slide"
          />
      
          <Carousel.Caption className="container-btn-carrousel">
            {/* <h3>Poke Api</h3> */}
            {/* <p>Desplegar Pokemones</p> */}
            <Button 
              variant="warning"
              href="https://clever-rabanadas-54dd82.netlify.app/#/pokedex" 
              target="_blank"
            >
              Poke-Api
            </Button>{' '}

            <Button onClick={navigateContact} variant="info">Contact</Button>{' '}
            <a className='download-cv-carrousel' href='/CvFabianGonzalez.pdf' download>DOWNLOAD CV</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carrousel-item">
          <img 
            className="d-block w-100 carrousel-i"
            src="https://preview.redd.it/um5y2oylxz231.gif?s=f4b807e3e6a9d82ced85f5ae1082dcfc42703922"
            alt="Third slide"
          />
      
          <Carousel.Caption className="container-btn-carrousel">
            {/* <p>
              Desplegar personajes.
            </p> */}
            <Button 
              variant="warning"
              href="https://glittering-marigold-930bf8.netlify.app/" 
              target="_blank"
            >
              Rick and Mortin
              </Button>{' '}
            <Button onClick={navigateContact} variant="info">Contact</Button>{' '}
            <a className='download-cv-carrousel' href='/CvFabianGonzalez.pdf' download>DOWNLOAD CV</a>
            {/* <h3>Rick Mortin Api</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default CarouselImg;